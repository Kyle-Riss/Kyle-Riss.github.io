# Kyle-Riss.github.io

Personal academic website for **Yubeen Ha** — undergraduate researcher (Kangnam University) working on Vision-Language-Action (VLA) models and robot manipulation.

Live site: https://kyle-riss.github.io

## Stack

Plain static HTML/CSS/JS, no build step.

- `index.html` — page content and structure
- `style.css` — design system, layout, light/dark themes
- `script.js` — theme toggle (with `localStorage` persistence) and footer year

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to the `main` branch of `Kyle-Riss/Kyle-Riss.github.io`.
2. Repo → **Settings → Pages**.
3. **Build and deployment → Source**: `Deploy from a branch`.
4. Branch: `main`, folder: `/ (root)`.
5. Wait 1–2 minutes, then open https://kyle-riss.github.io.

## Editing

All content lives in `index.html`, organized by section:

- Hero (`#top`)
- About (`#about`)
- Research interests (`#research`) — includes a callout linking to the FlowBridge project page
- Selected projects (`#projects`)
- Publications (`#publications`)
- Experience & education (`#experience`)
- Contact (`#contact`)

Colors, fonts, and spacing are controlled by CSS custom properties at the top of `style.css` (under `:root` / `[data-theme="dark"]`).

## Related

- Research project page: https://ma-vla.github.io
- GitHub: https://github.com/Kyle-Riss
- Hugging Face: https://huggingface.co/Kyle-Riss
