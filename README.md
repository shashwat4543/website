# Contributor Catalyst Program

This repository is the **vanilla HTML/CSS/JS website** for the collaborative Contributor Catalyst program. It is designed for GitHub Pages with no frameworks and no build step, and is built to be extended by contributors.

## Project structure

```text
.
├── index.html
├── about/
├── cohorts/
├── outputs/
├── gallery/
├── partners/
├── assets/
│   ├── css/
│   └── js/
├── data/
└── .github/
```

## Local setup (no build tools)

1. Clone the repo.
2. Open `index.html` directly in your browser, or run a simple static server if preferred.
3. Edit HTML/CSS/JS files directly; no install step is required.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` to deploy from `main` to GitHub Pages.

1. In GitHub, go to **Settings → Pages**.
2. Set **Build and deployment** source to **GitHub Actions**.
3. Push changes to `main`; deployment runs automatically.

## Contribution workflow

1. Pick or claim an issue from the Issues tab.
2. Create a branch from `main`.
3. Make small, focused changes.
4. Open a pull request using the PR template.
5. A mentor reviews and approves your pull request.
6. The maintainer merges it after mentor approval.

## Yearly update checklist

1. Update `cohorts/year-4.html` (and roll prior year content down as needed).
2. Add new outputs to `data/outputs.json` with complete metadata.
3. Update gallery images, captions, and alt text in `gallery/` + `assets/js/gallery.js`.
4. Refresh partner/funder entries in `partners/index.html` and `data/partners.json`.
5. Update contributor/mentor credits in `data/people.json`.
6. Confirm nav links, accessibility landmarks, and keyboard navigation still work.
7. Verify GitHub Pages deployment status after merge to `main`.

## License

Released under the [MIT License](LICENSE). Individual contributors retain authorship credit through the project's git history.
