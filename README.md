# API server by node.js, express.js and mongoose

Process management by [pm2](http://pm2.keymetrics.io/).
Testing by [mocha](https://mochajs.org/).
Use node.js > 5.x for better ES6 syntax support.

## Pre-install

```sh
npm install -g mocha pm2 apidoc concurrently
```

## Install

```sh
npm install
```

## Development

```sh
npm start # local dev environment
npm run doc # generate apidoc files
npm test # exec mocha test files(*.spec.js)
npm run deploy:test # git push to test branch and deploy to test server
npm run log # show local process logs
npm run log:test # show remote process logs(test server)
```
