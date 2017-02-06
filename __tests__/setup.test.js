const fs = require('fs');
const exec = require('child_process').execSync;

beforeAll(() => {
  exec('node setup.js', { stdio: 'inherit' });
});

describe('build setup', () => {
  test('`plugins.json` should be created', () => {
    expect(fs.lstatSync('plugins.json').isFile()).toBe(true);
  });
});
