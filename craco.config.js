const Alias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: Alias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.base.json'
      }
    }
  ]
};
