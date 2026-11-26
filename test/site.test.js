import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { contacts, content } from '../src/content/site.js';

const locales = [
  { name: 'fr', route: 'index.html', confirmation: 'merci/index.html' },
  { name: 'en', route: 'en/index.html', confirmation: 'en/thank-you/index.html' },
];

test('French and English expose the same service and project taxonomy', () => {
  for (const key of ['services', 'projects']) {
    assert.deepEqual(content.fr[key].map(({ id }) => id), content.en[key].map(({ id }) => id));
  }
  assert.equal(content.fr.services.length, 8);
  assert.equal(content.fr.projects.length, 4);
});

for (const locale of locales) {
  test(`${locale.name} build preserves anchors, assets and direct contact with a map`, () => {
    const html = readFileSync(`dist/${locale.route}`, 'utf8');
    assert.match(html, new RegExp(`<html lang="${locale.name}"`));
    assert.equal([...html.matchAll(/<h1(?:>| )/g)].length, 1);
    for (const anchor of ['hero', 'services', 'projects', 'about', 'why-choose-us', 'contact']) {
      assert.ok(html.includes(`id="${anchor}"`), `Missing anchor ${anchor}`);
    }
    for (const [script] of html.matchAll(/<script[^>]*type="module"[^>]*>/g)) {
      assert.match(script, /src="\/_astro\//, 'Executable scripts must be compatible with the self-only CSP');
    }
    assert.ok(!html.includes('name="form-name"'), 'The inquiry form must stay unpublished until email delivery is verified');
    assert.match(html, /<iframe\b[^>]*src="https:\/\/www\.google\.com\/maps\/embed\?/);
    for (const address of [contacts.email, contacts.director]) {
      assert.ok(html.includes(`href="mailto:${address}"`));
    }
    assert.ok(html.includes(`href="tel:${contacts.tel}"`));
    assert.ok(html.includes(`href="${contacts.whatsapp}"`));
    assert.ok(!html.includes('@gmail.com'));
    for (const asset of html.matchAll(/(?:src|href)="(\/_astro\/[^"]+)"/g)) {
      assert.ok(existsSync(`dist${asset[1]}`), `Missing asset ${asset[1]}`);
    }
    const confirmation = readFileSync(`dist/${locale.confirmation}`, 'utf8');
    assert.match(confirmation, /name="robots" content="noindex"/);
  });
}
