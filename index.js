const path = require('path');

function _camelize(str) {
  function capitalize(m, p1) {
    return p1.toUpperCase();
  }
  var scope = str.substr(0, str.indexOf('/') + 1);
  var transformed = str
    .replace(scope, '')
    .replace('/', '.')
    .replace('webpack-', '')
    .replace(/-(\w)/g, capitalize)
    .replace(/^(\w)/g, capitalize);
  scope = scope.replace('@', '').replace('/', '.');
  return scope + transformed;
}

function _addDep(deps, dep, depName) {
  depName = depName || _camelize(dep);
  Object.defineProperty(deps, depName, {
    enumerable: true,
    get: function() {
      return require(dep);
    }
  });
}

function _webpackPlugins(deps, pkg, options) {
  const plugins = require('./plugins.json');
  for (var plugin in plugins) {
    _addDep(deps, plugins[plugin], plugin);
  }
}

function _pkgDeps(deps, pkg) {
  ['dependencies', 'devDependencies'].forEach(depType => {
    if (pkg && pkg[depType]) {
      for (var dep in pkg[depType]) {
        if (dep.indexOf('webpack') !== -1 && dep.indexOf('plugin') !== -1) {
          _addDep(deps, dep);
        }
      }
    }
  });
}

module.exports = function(options) {
  options = options || {};
  var deps = {};
  // todo: use https://www.npmjs.com/package/find-up or https://www.npmjs.com/package/find-project-root
  var pkg = require(path.join(__dirname, '..', 'package.json'));
  _webpackPlugins(deps, pkg, options);
  _pkgDeps(deps, pkg, options);

  return deps;
};
