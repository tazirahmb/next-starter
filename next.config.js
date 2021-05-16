// const withPlugins = require('next-compose-plugins');
const path = require('path');
const alias = require('./tools/alias').alias;

const buildMode = (process.argv[2] || '').split('--')[1] || 'development';

const nextConfig = {
  env: {
    MODE: buildMode,
  },
  webpack: (config, { dev }) => {
    Object.keys(alias).map(
      (key) => (config.resolve.alias[key] = path.join(__dirname, alias[key]))
    );

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          emitError: true,
          emitWarning: true,
          configFile: path.join(__dirname, './.eslintrc.js'),
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
