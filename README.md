# hirschmann.blog

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

GitHub Pages is **no longer used**. It was switched off in September 2026: a custom
domain on a GitHub *user* site makes `fhirschmann.github.io` permanently redirect to
that domain. The repository was renamed from `fhirschmann.github.io` to
`hirschmann.blog` at the same time, which frees the `fhirschmann.github.io` name for
an actual GitHub user page later on.
