# webpack-api-node-issue

This repository displayes a loader bug after building an external project with webpack-api.

Install project:

```bash
git clone f webpack-api-node-issue
cd webpack-api-node-issue

сd project1
npm install
cd ..
cd project2
npm install
```

Build and run the app for building (you must be in the main directory of the repository):

```bash
cd project1
npm run watch
npm run app
```

### Current behavior:

```
Uncaught (in promise) TypeError: Cannot read property 'default' of undefined
    at eval (loadLoader.js:6)

./src/main.js↵Module build failed (from ./node_modules/babel-loader/lib/index.js)
  Error: Cannot find module 'D:\WebpackTest\project2\node_modules\babel-loader\lib\index.js'
```