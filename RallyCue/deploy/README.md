# RallyCue — Landing Page

In-Motion Active Coaching for net sports. A voice-coaching headband + stereo courtside camera that delivers real-time biomechanical cues.

🌐 **Live site:** https://rallycue.us

---

## Project Structure

```
.
├── index.html              # Entry page (static HTML + inline React via Babel)
├── preview-components.jsx  # All React components (Hero, Product, Pricing, Signup, etc.)
├── src/
│   └── assets/
│       ├── logo-mark.png       # Orange infinity logo
│       └── logo-wordmark.png   # "RALLYCUE" wordmark
└── README.md
```

**Stack:** Pure static HTML, React 18 via CDN, Tailwind via CDN, Babel in-browser transpilation. No build step required.

**Form backend:** [Formspree](https://formspree.io) — submissions land in the owner's email.

---

## Deploy to Cloudflare Pages (with rallycue.us)

### One-time setup (via GitHub)

1. **Create a GitHub repo**
   - Go to https://github.com/new
   - Repo name: `rallycue-landing` (or anything)
   - Keep it **public** (Cloudflare Pages free tier)
   - Create → then upload this folder's contents (drag-and-drop or `git push`)

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare dash](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
   - Authorize Cloudflare's GitHub app, pick the `rallycue-landing` repo
   - **Build settings:**
     - Framework preset: **None**
     - Build command: *(leave empty)*
     - Build output directory: `/` *(root)*
   - **Save and Deploy** → wait ~30 seconds → you get `rallycue-landing.pages.dev`

3. **Attach your domain `rallycue.us`**
   - In the Pages project → **Custom domains** → **Set up a custom domain**
   - Enter `rallycue.us` → Cloudflare auto-creates the CNAME (since the domain is on the same account)
   - Repeat for `www.rallycue.us` if you want both to work
   - HTTPS cert auto-issues in 1–2 minutes → **done**

### Updating the site later

Just edit any file in your local repo, `git commit && git push` → Cloudflare Pages rebuilds and redeploys automatically in seconds.

---

## Local preview

Any static HTTP server works. Quickest:

```bash
# with Python
python3 -m http.server 8080

# or Node
npx http-server -p 8080
```

Then open http://localhost:8080

Opening `index.html` via `file://` directly **will not work** — the JSX file is fetched over HTTP.

---

## Form submissions

Early-access signups POST to:
`https://formspree.io/f/xlgaozrp`

- First submission may require confirming Formspree's activation email
- View all submissions at https://formspree.io/forms/xlgaozrp/submissions
- Free tier: 50 submissions/month

To change the endpoint, edit `FORMSPREE_ENDPOINT` near the top of `SignupSection` in `preview-components.jsx`.

---

## Credits

Team 55 · Cornell Tech Maker Day 2 · 2026
Li · Wang · Xie · Xu · Tsao
