# fhirschmann.github.io

Personal website of Fabian Hirschmann, built with [Astro](https://astro.build).

## Development

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/
```

## Deployment

Hosted on **Cloudflare Pages** (project `hirschmann-blog`, Git integration with
this repository). Every push to `master` triggers a Cloudflare build:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `.node-version` (22) |

Production domain: <https://hirschmann.blog> (plus `www`, which redirects).
Pushes to other branches get a preview deployment under `*.hirschmann-blog.pages.dev`.

GitHub Pages is **no longer used** — it was switched off in September 2026 so that
the `fhirschmann.github.io` address is free again (a custom domain on a GitHub user
site makes `*.github.io` redirect to that domain, which is exactly what we didn't want).
