# load-webpack-plugins

> Conveniently Lazy Load Webpack Plugins from Webpack Builtin Plugins or from Package Dependencies.

[![Twitter](https://img.shields.io/twitter/url/https/github.com/abhishekisnot/load-webpack-plugins.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![Build Status](https://travis-ci.org/abhishekisnot/load-webpack-plugins.svg?branch=master)](https://travis-ci.org/abhishekisnot/load-webpack-plugins)
[![Greenkeeper badge](https://badges.greenkeeper.io/abhishekisnot/load-webpack-plugins.svg)](https://greenkeeper.io/)

## Install

```sh
  npm install --save-dev load-webpack-plugins
```
 or using yarn
 ```sh
  yarn add load-webpack-plugins
 ```

## Usage

### Loading Webpack Builtin Plugins

Webpack Builtin plugins can be conveniently lazy loaded without remembering the nested path references.

```js
  var $ = require('load-webpack-plugins')();
  ...
  module.exports = function() {
    ...
    plugins: [
      new $.APIPlugin(options),
      new $.DllPlugin(options),
      new $.UglifyJsPlugin(options),
    ]
    ...
  }
```

Please refer [plugins.json](plugins.json) for up to date list of supported plugins.

### Loading from package dependencies

Given a `package.json` file that has webpack plugins in `dependencies` or `devDependencies`:

```json
{
  "<d|devD>ependencies": {
    "webpack-html-plugin": "*",
    "assets-webpack-plugin": "*",
  }
}
```

Webpack plugins can be conveniently lazy loaded in `webpack.config.js`.

```js
  var $ = require('load-webpack-plugins')();
  ...
  module.exports = function() {
    ...
    plugins: [
      new $.AssetsPlugin(options),
      new $.HtmlPlugin(options),
    ]
    ...
  }
```

## Todo
- [x] Support Webpack Plugins published as Private/Scoped NPM Packages
- [ ] Support Custom patterns for Plugins Discovery
- [ ] Support Custom name transform function in option.

## Credit
Thanks to @sindresorhus for awesome [load-grunt-plugins](https://github.com/sindresorhus/load-grunt-tasks)

