// const withPlugins = require('next-compose-plugins');
const path = require('path');

const buildMode = (process.argv[2] || '').split('--')[1] || 'staging';

const nextConfig = {
  env: {
    MODE: buildMode,
  },
  webpack: (config, { dev }) => {
    config.resolve.alias['~'] = path.join(__dirname, '/src');

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          // emitError: true,
          emitWarning: true,
          // configFile: path.join(__dirname, '/../.eslintrc')

          configFile: path.join(__dirname, './.eslintrc.js'),
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
