# JALAN — Explore Taiwan

A static landing page for Taiwan tours, built with HTML, CSS, Sass, and vanilla JavaScript.

## Preview locally

Run a static file server from this folder, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. No build step is needed to preview the compiled styles in `css/style.css`.

## Responsive updates

- Tablet and phone layouts stack the content and tour cards to fit narrow screens.
- Tour prices and booking buttons stay visible on touch screens.
- Decorative story videos are skipped on mobile and load lazily on desktop.
- Smooth scrolling and transitions respect reduced-motion settings.
