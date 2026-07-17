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

## Contributing

New here? Read this section before opening an issue or PR — it covers the full path from "I want to help" to "my change is merged."

### Quick start (first-time contributors)

1. Read [`CONTRIBUTING.md`](.github/CONTRIBUTING.md) for coding conventions, accessibility standards, and testing steps.
2. Fork the repo (or clone directly if you have write access) and follow [Local setup](#local-setup-no-build-tools) above.
3. Browse [open issues](../../issues) and look for the [`good first issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) label if this is your first contribution.
4. Comment on the issue to claim it before starting work, so two people don't duplicate effort.

### Workflow

1. Pick or claim an issue from the Issues tab. If no issue exists for what you want to change, [open one first](../../issues/new/choose) using the appropriate template — this keeps work visible and avoids duplicated effort.
2. Create a branch from `main` (e.g. `git checkout -b fix/gallery-alt-text`).
3. Make small, focused changes that match the issue's scope. Prefer several small PRs over one large one.
4. Test locally per [`CONTRIBUTING.md`](.github/CONTRIBUTING.md#testing-your-change) — open the affected pages in a browser and check keyboard navigation.
5. Open a pull request using the PR template, and complete every checklist item (or explain why an item doesn't apply).
6. Link the PR to its issue (`Closes #123`) so it closes automatically on merge.
7. A mentor reviews and approves your pull request; respond to review comments with follow-up commits rather than force-pushing over history.
8. The maintainer merges it after mentor approval, and GitHub Pages deploys automatically from `main`.

### Getting help

- Unsure where to start? Ask in the issue you're interested in — a mentor will point you in the right direction.
- Found a bug but don't have time to fix it? [File a bug report](../../issues/new?template=bug-report.yml) instead of leaving it undocumented.
- Stuck mid-PR? Open it as a draft and describe what you're blocked on; reviewers can jump in before it's finished.

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
