# hirschmann.blog

Personal website of Fabian Hirschmann, built with [Astro](https://astro.build).

## Development

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/
```

Active projects share an illustrated terminal listing on the home and projects
pages, with smaller previews on the home page. Images reveal their original colours
on hover or keyboard focus; clicking or tapping an image opens its project page in a new tab.
Asset sources and generation
prompts are documented in [docs/project-images.md](docs/project-images.md).

## Deployment

Hosted on **Cloudflare Pages**, project `hirschmann-blog`, connected to this
repository through Cloudflare's GitHub integration. Every push to `master` triggers
a build; other branches get a preview deployment under `*.hirschmann-blog.pages.dev`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | pinned to 22 via `.node-version` |
| Production branch | `master` |

Domains (zone `hirschmann.blog` lives in the same Cloudflare account):

- `hirschmann.blog` and `www.hirschmann.blog` are custom domains of the Pages
  project; both DNS records are proxied CNAMEs to `hirschmann-blog.pages.dev`.
- A redirect rule *"www zu hirschmann.blog (301)"* sends `www` to the apex,
  keeping path and query string.
- `build.format: 'file'` keeps the old Jekyll URLs alive: Cloudflare serves
  `/legal` directly and 308-redirects `/legal.html` to it.

GitHub Pages is **no longer used**. It was switched off in September 2026: a custom
domain on a GitHub *user* site makes `fhirschmann.github.io` permanently redirect to
that domain. The repository was renamed from `fhirschmann.github.io` to
`hirschmann.blog` at the same time, which frees the `fhirschmann.github.io` name for
an actual GitHub user page later on.
