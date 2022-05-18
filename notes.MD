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
    - Manifest add start url - preferred url when web app is opened. (issue loading at root cos app is hosted on subdirectory /crypto-pairs/).

- Webpack - generate index.html, main,js, service-worker.js, manifest + favicon into build folder.
    - Inject manifest (workbox) injects into SW a list of URLs to precache.
    - source-map-loader to bundle source maps in node modules (was throwing devTools warning otherwise).
    - Environment plugin to inject the variables in .env.
    - Set BASE_URL in each webpack config (used for React Router).
    
- Changed PUBLIC_URL to hard code in service-worker and serviceWorkerRegistration.
    - Hardcoded /crypto-pairs/service-worker.js to the production route in service-worker (prefer using something like PUBLIC_URL, however SW has no access to window obj.)
    - When in dev SW wont work cause of the hardcode path. Unregister SW in development.

- Material UI - bottom navigation for mobile, react-router.

- React Router - basename prop used to set base url used for react router components (like navigate).

- tsconfig - add react-jsx so no need to import React for every module as per react 17.
    - eslintrc - react-in-jsx-scope turned off as per above.

## State management
- Redux used to handle global state management.

## Search
- Used a debounce to limit API requests - using CoinGecko API.
- Had to use useRef to hold value of search term as debounced function would reference initial state as search term (empty string).
- Search Bar > Search Results > Single Result & Selected Result

- useEffect runs effect(fn) once basePair is true (as in dep array). Cleanup used to restore init error value (false) on comp unmount.


## Design Philosophy


- File Structure:
    - component
        - index.tsx
        - ? index.css
        - ? helper (directory)
            - helperName.tsx
