# Phở House

Landing page for Phở House, 15651 Hawthorne Blvd, Suite E, Lawndale, CA 90260.

A plain static site: `index.html`, `style.css`, `main.js` and the `assets/` folder (hero video, photos, favicon). No build step.

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:3000. You can also just open `index.html` in a browser.

## Deploy on Railway

1. In Railway, choose **New Project → Deploy from GitHub repo** and pick this repo.
2. Railway detects Node, runs `npm install`, then `npm start`, which serves the site on the port Railway provides.
3. Under **Settings → Networking**, click **Generate Domain** for a free railway.app address, or add your own domain.

## Other hosts

Because it is static, it also works as is on GitHub Pages, Netlify, Vercel or Cloudflare Pages. Point them at the repo root, with no build command.

## Editing

- Business details (address, phone, hours) are in `index.html`.
- Colors and fonts are the tokens at the top of `style.css`.
- Replace `assets/hero.mp4` and `assets/hero-poster.jpg` to change the hero video.
