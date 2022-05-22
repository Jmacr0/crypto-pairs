# Crypto Pairs ![](https://img.shields.io/github/license/Jmacr0/crypto-pairs) ![](https://img.shields.io/github/v/release/jmacr0/crypto-pairs?include_prereleases)
---
**An application that displays cryptocurrency pair values.**

```
User Story:

AS a CC investor / trader
I WANT to clearly view changes in the market
SO I can make an investment decision
```

*See the live version: https://jmacr0.github.io/crypto-pairs/*

***Install the app to desktop:***

![Download PWA example gif.](https://github.com/Jmacr0/crypto-pairs/blob/main/vendor/Download_PWA_example.gif)

---
## Quick Run Down
Crypto Pairs is built on React, using Webpack, Babel, and TypeScript.

### Scripts
```
start - runs app using webpack webServer.
server - runs app backend server.
build - builds a production version of the app using webpack config.
test - run tests.
predeploy - gets run when deploy is run.
deploy - deploys to gh-pages branch for production.
```

---
## Design Philospophy
- Components -> index, slice (redux state), helper (dir containing component specific helper fn)
- import order:
    - react
    - redux
    - components
    - material ui components
    - material ui icons
    - index.scss

- SASS for own styles - preferred, can use variables for reusability.
    - _base.scss global module that can be imported to component specific scss file.
- MUI create theme to modify existing MUI themes e.g. palette -> primary

## Limitations
- API