const { merge } = require('webpack-merge');
const HtmlwWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
packageJson

const devConfig = {
  mode: 'development',
  devServer: {
    
    historyApiFallback: { 
        index: 'index.html' 
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlwWebpackPlugin({
      template: './public/index.html'
    })
    ]
};

module.exports = merge(commonConfig, devConfig);