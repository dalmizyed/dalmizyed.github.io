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

- `index.html`: replace every `[bracketed]` placeholder and the GitHub link.
- Add a project: copy one `<article class="project">` block.
- Images: put files in `assets/images/`, then replace the gray placeholder `<div class="ph">` with the commented `<img>` line. Use JPG/WebP under ~300 KB each.
- Résumé: save your PDF as `assets/resume/resume.pdf`.
- Colors and fonts: edit the variables at the top of `css/style.css`.

## Tips for engineering portfolios

- Lead with your three strongest projects and a measurable result for each.
- Show your own work: CAD screenshots, FEA plots, photos of the built part.
- Be clear about what you did versus what the team did.
- Don’t post anything covered by an NDA or an internship agreement.

## Blog

The blog uses Jekyll, which GitHub Pages builds automatically (no setup needed).

- Posts are Markdown files in `_posts/`, named `YYYY-MM-DD-title.md`.
- The blog lives at `/blog/`, and the post editor lives at `/admin/`.
- The repo must be named `dalmizyed.github.io` and use the `main` branch (see `admin/config.yml`).

### Posting from the admin page

1. On GitHub, go to Settings → Developer settings → Personal access tokens → Fine-grained tokens.
2. Create a token limited to this one repo, with **Contents: Read and write**. Save it somewhere private.
3. Open `https://dalmizyed.github.io/admin/`, choose the sign-in with token option, and paste the token.
4. Write a post and publish. The editor commits it to the repo, and the site updates in a minute or two.

Only people with write access to the repo can publish, so nobody else can post. Don't share the token or commit it.

## Projects

Projects are Markdown files in `_projects/`. Each one gets its own page at `/projects/file-name/` and a card on the home page, sorted by `order`.

- Add a project: copy an existing file in `_projects/`, rename it, and edit the front matter at the top (title, order, summary, thumbnail, skills, details, results). Everything below the second `---` is the page text.
- Thumbnails: save an image in `assets/images/projects/` and set `thumbnail: /assets/images/projects/your-image.jpg`. Leave it blank to show a placeholder.
- Or use the admin page: open `/admin/`, choose Projects, and fill in the form.
