# Handoff — RallyCue Landing Page

> Context for whoever is picking this up (human engineer or AI agent).

## TL;DR — how to deploy this

**This is a pure static site. No build step. No npm install.**

Just serve the files as-is from any static host. That's it.

```bash
# local check
cd deploy/
python3 -m http.server 8080
# open http://localhost:8080
```

For a production deploy, any of these work with zero config:
- **Cloudflare Pages** — upload folder / connect GitHub, build output dir = `/`
- **Vercel** — `vercel deploy` in this folder, pick "Other" framework
- **Netlify** — drag-and-drop this folder onto app.netlify.com
- **GitHub Pages** — push to a repo, enable Pages
- **Plain nginx/Apache** — point docroot at this folder
- **S3 + CloudFront** — upload, set `index.html` as default

The currently-live version is deployed to **Cloudflare Pages** pointing at the domain **rallycue.us** (DNS managed by Cloudflare).

---

## What's in the box

```
deploy/
├── index.html              ← Entry. HTML shell + CDN links + <script type="text/babel">
├── preview-components.jsx  ← ALL React components (~2500 lines, one file)
├── src/assets/
│   ├── logo-mark.png       ← orange infinity logo
│   └── logo-wordmark.png   ← "RALLYCUE" wordmark
├── README.md               ← user-facing readme
├── HANDOFF.md              ← this file
└── .gitignore
```

## Stack — unusual, read this

- **No bundler. No package.json. No node_modules.** Everything loads from CDN at runtime.
- `index.html` pulls React 18, ReactDOM, Babel standalone, and Tailwind CDN from unpkg/tailwindcss.com.
- `preview-components.jsx` is loaded as `<script type="text/babel">` and transpiled in the browser.
- All components are declared as global `window.ComponentName = ...` (IIFE pattern) so separate script blocks share them.
- There is **one** JSX file containing every section (Navbar, Hero, Problem, Product, TechPipeline, Storyboard, Competitor, MarketScale, Pricing, Signup, Footer). It's long on purpose — simpler handoff than a split repo.

### Why no build step?
Trade-off: slightly slower first paint (Babel transpiles on load) in exchange for **editable by anyone who can open a text editor**. The founder wanted the site to be maintainable without JS tooling. If Manus needs better perf, the migration path is: move JSX to a Vite project, remove the Babel CDN script, done — no component code needs to change.

## Runtime dependencies (all CDN)

See the `<head>` of `index.html`. Pinned versions with SRI hashes:
- React 18.3.1 + ReactDOM 18.3.1
- @babel/standalone 7.29.0
- Tailwind CDN (unpinned — it's fine for a marketing site)
- Google Fonts: Barlow Condensed, Space Grotesk

## Form submissions (important — don't break this)

The signup form POSTs to **Formspree**:
- Endpoint: `https://formspree.io/f/xlgaozrp`
- Defined as `FORMSPREE_ENDPOINT` inside `SignupSection` in `preview-components.jsx`
- Submissions email the Formspree account owner + viewable at https://formspree.io/forms/xlgaozrp/submissions
- Free tier: 50/month

If migrating, swap the endpoint for whatever backend Manus prefers (own serverless function, Supabase, etc.). The form uses a plain `fetch(endpoint, { method: 'POST', body: formData })` — no SDK.

## Known characteristics / quirks

- **Mobile responsive**: uses Tailwind's `sm: md: lg:` breakpoints; recently tuned. Test on iPhone SE width (~375px) as the floor.
- **Images are served as-is** — no responsive srcset. The two logos are small enough that it doesn't matter.
- **No analytics** currently wired up. Add a `<script>` in `index.html` `<head>` if needed.
- **No SEO beyond basic meta tags** in `index.html`. OG image is referenced but not included — add one if doing paid acquisition.
- **Tailwind CDN warns in console** ("don't use in production"). It works fine for a marketing site at this traffic level. If it becomes a problem, migrate to Vite + Tailwind CLI.

## Domain / DNS notes

- `rallycue.us` is registered at Cloudflare (same account that hosts Pages).
- DNS is managed at Cloudflare — there's a CNAME record `rallycue.us → rallycue.pages.dev` (Proxied).
- SSL is Cloudflare-issued and auto-renews.

## Contact / project context

RallyCue is a real-time voice-coaching headband + stereo courtside camera for net sports (tennis, badminton, pickleball, table tennis). The landing page is for Cornell Tech Maker Day 2 (2026) early-access signups.

Team: Li · Wang · Xie · Xu · Tsao

---

## Quick sanity-check after deploy

1. Home page loads, Hero section renders with tennis player photo
2. Scroll — all sections render (Product, Tech, Storyboard, Landscape, Market, Pricing, Signup, Footer)
3. Click "Get Early Access" → jumps to signup form → submit a test → confirm it reaches Formspree
4. Mobile check: open on phone or DevTools responsive mode at 375px — no horizontal scroll, stats row is 2×2, hero title fits, no elements overflow the viewport
