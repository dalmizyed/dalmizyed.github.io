# Engineering Portfolio

A static portfolio site (plain HTML and CSS, no build step) for GitHub Pages.

## Deploy

1. On GitHub, create a **public** repository named `your-username.github.io`
   (this makes the site live at `https://your-username.github.io`).
   Any other repo name also works and is served at `https://your-username.github.io/repo-name/`.
2. Upload the contents of this folder (not the folder itself) so `index.html` is at the repo root.
   Or from a terminal:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
3. In the repo, open **Settings → Pages**, set Source to **Deploy from a branch**,
   choose `main` and `/ (root)`, and save. The site goes live in a minute or two.

## Customize

- `index.html`: replace every `[bracketed]` placeholder, "Your Name", and the email and profile links.
- Add a project: copy one `<article class="project">` block.
- Images: put files in `assets/images/`, then replace the gray placeholder `<div class="ph">` with the commented `<img>` line. Use JPG/WebP under ~300 KB each.
- Résumé: save your PDF as `assets/resume/resume.pdf`.
- Colors and fonts: edit the variables at the top of `css/style.css`.

## Tips for engineering portfolios

- Lead with your three strongest projects and a measurable result for each.
- Show your own work: CAD screenshots, FEA plots, photos of the built part.
- Be clear about what you did versus what the team did.
- Don’t post anything covered by an NDA or an internship agreement.
