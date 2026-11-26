# Africa Global Engineering

Bilingual marketing site built with Astro. The French homepage is at `/` and the English homepage is at `/en/`. The site renders to static HTML and uses small scripts for the mobile menu and inquiry form.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run build
npm test
```

Keep the two locales in sync in `src/content/site.js`. Use the [brand guidelines](docs/brand-guidelines.md) when editing the site.

## Netlify form delivery

The production output declares two Netlify Forms, `age-lead-fr` and `age-lead-en`. Each verified submission contains the visitor’s name, optional company and project type, preferred reply method, selected reply address or phone number, and message. With JavaScript enabled, the form submits in place. Native submissions use the matching language’s confirmation page.

Before launch, enable form detection in the Netlify project and redeploy. Add an email notification for each form with `contact@africaglobalengineering.com` as recipient. Confirm the recipient in Netlify if prompted. Use a separate Netlify staging project and a test inbox for end-to-end delivery checks. Verify both form variants in the staging dashboard and inbox, then confirm the production recipient is active. A local preview does not send email. [Netlify setup](https://docs.netlify.com/manage/forms/setup/) · [Netlify notifications](https://docs.netlify.com/manage/forms/notifications/)
