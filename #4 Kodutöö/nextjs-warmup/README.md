# Next.js Warm-up

A small Next.js App Router exercise with a welcome page, an about page, an interactive counter, and a server route handler.

## Run locally

```bash
npm install
npm run dev
```

Open the address printed by Next.js. The JSON endpoint is available at `/api/message`.

## What I learned

1. **What does Next.js provide beyond React alone?**  
   Next.js adds routing, server rendering and components, route handlers, and build/deployment tooling around React.

2. **Why does the counter need `'use client'`?**  
   It uses React state and handles browser click events. The directive marks the counter as a Client Component so those interactive features can run in the browser.

3. **Where does the code in `app/api/message/route.js` run?**  
   It runs on the server as a Next.js Route Handler and returns an HTTP response to the browser.

4. **How is this endpoint similar to an Express route?**  
   Both define server-side code for an HTTP method and URL, then return a response. In this app, Next.js provides the routing and server runtime without a separate Express server.

5. **Why must secrets remain on the server?**  
   Browser code is sent to users and can be inspected, so any secret included there can be exposed. Keep private credentials on the server and only expose values intended to be public.

## Supabase preparation

- Browser code runs on a visitor's device and must be treated as public; server code runs in the Next.js server runtime.
- Database Row Level Security (RLS) and least-privilege grants are still needed because a public client can call the database API directly.
- Hiding a button only changes what the interface shows. It does not authorize or protect the server endpoint behind it; the endpoint must enforce access itself.
- Read the [Next.js App Router getting started guide](https://nextjs.org/docs/app/getting-started) and the [Supabase Next.js quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs). This exercise does not connect to Supabase.
