const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Set the HTML template to main.html
      webpackConfig.plugins.forEach((plugin) => {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
          plugin.options.template = path.resolve(__dirname, 'public/main.html');
        }
      });
      return webpackConfig;
    },
  },
};