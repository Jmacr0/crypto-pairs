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
    - Hardcoded /crypto-pairs/service-worker.js to the production route in service-worker (prefer using something like PUBLIC_URL, however SW has no access to window obj.)
    - When in dev SW wont work cause od the hardcode path. Unregister SW in development.

- Material UI - bottom navigation for mobile, react-router.