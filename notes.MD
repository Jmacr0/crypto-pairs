# Progress Notes
---
## Initial Setup

- Set up TypeScript, Babel, Webpack.
- Webpack:
    - Bundle all tsx/ts/jsx/js files using index.tsx as entry.
    - Babel loader to turn TS into JS.

- TypeScript just for type checking.
- React to build FE components.s

Files:
 - .babelrc (configure babel settings, presets and plugins).
 - tsconfig.json (configure TS settings).
 - webpack.config.js (configure bundling settings).

## PWA

- Service Worker:
    - Webpack 5 node.js polyfill removed (Uncaught ReferenceError: process is not defined):
        - npm i process and import webpack into webpack.config.js.
    - CRA has TS template for service-worker, serviceWorkerRegistration, and reportWebVitals.

- Webpack - generate index.html, main,js, service-worker.js, manifest + favicon into build folder.
    - Inject manifest (workbox) injects into SW a list of URLs to precache.
- Changed PUBLIC_URL to hard code in service-worker and serviceWorkerRegistration.