# Replit project notes

## Run the app

Run `npm run dev` to start the Vite development server on port 5000. The Replit
workflow uses this same command for the web preview.

## Project structure

- `.gitignore` keeps installed packages and local build output out of Git.
- `.replitignore` excludes generated build output from Replit project uploads.
- `index.html` provides the browser document, metadata, and React mount point.
- `public/favicon.svg` is the browser-tab icon.
- `src/main.jsx` starts React and renders the app.
- `src/App.jsx` contains the lollipop-only opening, interactive cover, book
  pages, and page-turn interactions.
- `src/index.css` contains the colors, typography, responsive layout, and
  animations.
- `vite.config.mjs` configures Vite to serve this project through Replit's
  preview.
- `package.json` and `package-lock.json` describe and lock npm dependencies.
- `.replit` records the Node runtime and Replit start workflow.
