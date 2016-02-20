# Symfony Webpack React Edition
Project boilerplate for a Symfony Standard application using React on the frontend.

## What's inside?

- Everything included in [Symfony Standard Edition 3.x](https://github.com/symfony/symfony-standard/#whats-inside)
- [JMSDiExtraBundle](http://jmsyst.com/bundles/JMSDiExtraBundle)
- [Webpack 2](https://www.npmjs.com/package/webpack) with [Babel 6](https://babeljs.io/)
- [React](https://facebook.github.io/react/) with component hot loading
- [Redux](http://redux.js.org/)

## Installation

1. `composer create-project flm/symfony-webpack-react myproject`
2. `cd myproject`
3. `npm install`
4. `npm start`
5. Configure your web server of choice to point at `myproject/web`
6. Browse `/app_dev.php/`

## Production build

    npm run-script build
