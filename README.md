# A Little Christmas Story

An interactive Christmas card made with React and Vite. The opening screen
shows only the **Open me** lollipop. Select it to reveal the book cover, then
select the cover to open page one. On phones the reader uses a single-page
layout; wider screens show a two-page spread. Use the side arrows or left and
right arrow keys to turn through the book; the later pages are blank.

## Run it

```sh
npm run dev
```

To create a production build, run `npm run build`.

## What each file does

- `.gitignore` keeps installed packages and local build output out of Git.
- `.replitignore` excludes generated build output from Replit project uploads.
- `index.html` sets the page title and metadata, and provides the element React
  attaches to.
- `public/favicon.svg` is the small evergreen icon shown in the browser tab.
- `src/main.jsx` is the React entry point; it mounts the `App` component.
- `src/App.jsx` builds the lollipop opening, interactive cover, and book reader,
  draws the small SVG illustrations, and handles opening the card and turning
  pages.
- `src/index.css` defines the Christmas colors, cursive greeting, responsive
  styling, snow and page-arrival animations, and reduced-motion behavior.
- `vite.config.mjs` configures the Vite preview host for Replit.
- `package.json` lists the app's scripts and React/Vite dependencies.
- `package-lock.json` locks the exact dependency versions used by npm.
- `.replit` records the Node runtime and Replit's start workflow.
- `replit.md` contains Replit-specific run instructions and a short file map.
