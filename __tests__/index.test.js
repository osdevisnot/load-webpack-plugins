const path = require('path');
const rewire = require('rewire');
const $ = rewire(path.join(__dirname, '..', 'index'));

beforeAll(() => {
  $.__set__('__dirname', path.join(__dirname, '..', 'lib'));
});

describe('Utility Functions', () => {
  test('camelize correctly', () => {
    const capitalize = $.__get__('_camelize');
    expect(capitalize('webpack-assets-plugin')).toBe('AssetsPlugin');
    expect(capitalize('assets-webpack-plugin')).toBe('AssetsPlugin');
    expect(capitalize('webpack-html-plugin')).toBe('HtmlPlugin');
    expect(capitalize('html-webpack-plugin')).toBe('HtmlPlugin');
    expect(capitalize('@scope/html-webpack-plugin')).toBe('scope.HtmlPlugin');
  });
});

describe('default Function', () => {
  test('webpackPlugins: execpted properties', () => {
    var plugins = $();
    expect(plugins.APIPlugin).toBeDefined;
    expect(plugins.HtmlPlugin).toBeDefined;
  });
});
