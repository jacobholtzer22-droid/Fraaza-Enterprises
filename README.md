# Fraaza-Enterprises

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form API (local testing)

Copy `.env.example` to `.env.local` and fill in Resend/Telnyx values (or leave SMS vars unset to test email-only success paths). Start the dev server (`npm run dev`), then POST JSON to the route:

```bash
curl -sS -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test User",
    "email": "you@example.com",
    "phone": "(616) 555-1234",
    "service": "Hydroseeding",
    "message": "This is a test message with enough characters.",
    "website": ""
  }'
```

Expect `{"ok":true}` when at least one of email or SMS succeeds. Validation errors return HTTP 400 with `fieldErrors`. The honeypot field `website` must be empty for real submissions; if it is filled, the API returns 200 without sending notifications.
