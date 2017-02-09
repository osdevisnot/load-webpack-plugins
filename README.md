# load-webpack-plugins

> Conveniently Load Webpack Plugins from Package Dependencies or Webpack Builtins.

[![Build Status](https://travis-ci.org/abhishekisnot/load-webpack-plugins.svg?branch=master)](https://travis-ci.org/abhishekisnot/load-webpack-plugins)
[![Greenkeeper badge](https://badges.greenkeeper.io/abhishekisnot/load-webpack-plugins.svg)](https://greenkeeper.io/)

## Install

```sh
$ npm install --save-dev load-webpack-plugins
```


## Usage

### Loading Webpack Built in Plugins

Default or Built in Webpack plugins can be loaded without the nested path references.

Example:
```js
  $.APIPlugin(options)
  $.DllPlugin(options)
  $.UglifyJsPlugin(options)
```

Please refer plugins.json for current list of supported built in plugins.


### Loading from package dependencies

Given a `package.json` file that has some `dependencies` or `devDependencies` within:

```json
{
  "dependencies": {
    "webpack-html-plugin": "*",
    "assets-webpack-plugin": "*",
  }
}
```
OR
```json
{
  "devDependencies": {
    "webpack-html-plugin": "*",
    "assets-webpack-plugin": "*",
  }
}
```

Adding this to your `webpack.config.js` :

```js
  var webpackPlugins = require('load-webpack-plugins');
  var $ = webpackPlugins();
```
Or, even shorter

```js
  var $ = require('load-webpack-plugins')();
```

would result in all the webpack plugins in `package.json` to be loaded on ```$``` variable.

You can now access the plugins like so:
```js
  $.AssetsPlugin(options);
  $.HtmlPlugin(options);
```

## Todo
- [x] Support Webpack Plugins published as Private/Scoped NPM Packages
- [] Support Custom patterns for Plugins Discovery
- [] Support Custom name transform function in option.

## Credit
Thanks to @sindresorhus for awesome [load-grunt-plugins](https://github.com/sindresorhus/load-grunt-tasks)

