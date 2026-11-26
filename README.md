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

The public contact section uses direct contact links and an office map while inquiry email delivery is pending. The saved inquiry component declares two Netlify Forms, `age-lead-fr` and `age-lead-en`, when rendered. Each verified submission contains the visitor’s name, optional company and project type, preferred reply method, selected reply address or phone number, and message. With JavaScript enabled, the form submits in place. Native submissions use the matching language’s confirmation page.

Before enabling the form in production, render it on both locales in a separate Netlify staging project. Enable form detection, redeploy, and configure notifications for both forms using a test inbox. Verify both submissions in the staging dashboard and inbox. For production, use `contact@africaglobalengineering.com` for both form notifications and confirm the recipient if Netlify prompts for it. A local preview does not send email. [Netlify setup](https://docs.netlify.com/manage/forms/setup/) · [Netlify notifications](https://docs.netlify.com/manage/forms/notifications/)
