# Data Privacy Stack — website

The portal site for the [Data Privacy Stack](https://dataprivacystack.org):
home page, project overviews, and community information.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Architecture

This is the **portal** site. It does not host project documentation directly —
each project keeps and publishes its own docs and the portal links out to them
(aggregator model):

- `dataprivacystack.org` — this portal (home, projects, about, community)
- `presidio.dataprivacystack.org` — Presidio docs (built from the `presidio` repo)

## Structure

```
src/
├─ pages/index.astro          # custom marketing home page
├─ content/docs/              # Starlight-managed sections (nav + search + dark mode)
│  ├─ about.md
│  ├─ projects/{index,presidio}.md
│  └─ community/{contributing,governance}.md
├─ components/ProjectCard.astro
├─ styles/tokens.css          # design tokens (brand palette)
└─ assets/logo.svg
public/
├─ CNAME                      # custom domain (dataprivacystack.org)
└─ favicon.svg
```

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the production build
```

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
`.github/workflows/deploy.yml`. The Pages source must be set to **GitHub
Actions** (Settings → Pages → Build and deployment → Source).
