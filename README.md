<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Himanshu Thakur — Portfolio</h1>

<p align="center">
  Software Engineer · Backend &amp; Distributed Systems
</p>

<p align="center">
  <a href="https://himanshu-thakur.pages.dev/">Live Site</a> ·
  <a href="https://github.com/himanshu-thakur-7">GitHub</a> ·
  <a href="https://medium.com/@himanshuthakur8119">Medium</a>
</p>

[![Site preview](/public/site-preview.png)](https://himanshu-thakur.pages.dev/)

---

## About

Personal portfolio for **Himanshu Thakur**, a Software Engineer specializing in backend systems, distributed architecture, and cloud infrastructure. Currently at Wells Fargo, having scaled systems from 500 to 15,000+ users (30×).

Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). Deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

---

## Sections

| Section | Description |
|---|---|
| **Intro** | Animated hero with typewriter role decoder |
| **Projects** | System design showcases — Ride-Matching, File Sync, Load Balancer, Email Orchestrator |
| **Blog** | Latest Medium posts on distributed systems, system design, and Go |
| **About** | Background, stack, and current focus areas |
| **Contact** | Form that delivers directly to inbox via FormSubmit |

---

## Tech stack

- **Framework** — [Remix v2](https://remix.run/) + Vite, deployed as a Cloudflare Worker
- **3D / Animation** — [Three.js](https://threejs.org/), CSS custom properties, `IntersectionObserver`-driven reveal animations
- **Styling** — CSS Modules with PostCSS, `oklch()` color space, custom media queries
- **Contact form** — [FormSubmit.co](https://formsubmit.co/) (serverless, no account required)
- **Hosting** — [Cloudflare Pages](https://pages.cloudflare.com/)

---

## Install & run

Requires Node.js `>=19.9.0` and npm `>=9.6.3`.

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:7777`.

---

## Deploy

The site is hosted on Cloudflare Pages. To deploy:

```bash
npm run deploy
```

Make sure `wrangler` is authenticated (`npx wrangler login`) and the project is linked to your Cloudflare Pages project before running.

---

## Contact form

The contact form uses [FormSubmit.co](https://formsubmit.co/) — no server, no API keys, no account needed. On the **first submission** from a new domain, FormSubmit sends a one-time activation email to the recipient. Click the link once and all subsequent submissions are delivered automatically.

---

## License

Code is open source — feel free to use it as a base for your own portfolio. If you use the design largely unmodified, a credit is appreciated. The project write-ups and personal content are my own and should not be reused.
