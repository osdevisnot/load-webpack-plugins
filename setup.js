#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const webpackPaths = [
  path.join(__dirname, 'node_modules', 'webpack', 'lib'),
  path.join(__dirname, 'node_modules', 'webpack', 'lib', 'optimize')
];

let plugins = {};

for (const webpackPath of webpackPaths) {
  const files = fs.readdirSync(webpackPath);
  for (const file of files) {
    const name = path.join(webpackPath, file);
    // all files which have 'Plugin' word in filename...
    if (fs.statSync(name).isFile() && file.indexOf('Plugin') !== -1) {
      const key = name.substr(name.lastIndexOf('/') + 1).replace('.js', '');
      const value = name.replace(path.join(__dirname, 'node_modules'), '').replace('.js', '').substr(1);
      plugins[key] = value;
    }
  }
}

fs.writeFileSync('plugins.json', JSON.stringify(plugins, null, '  '), 'utf8');
