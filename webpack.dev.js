const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { commonConfig, appSCSSLoader, moduleSCSSLoader } = require(path.join(
  __dirname,
  'webpack.common.js'
))

module.exports = merge.smart(commonConfig, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: 9000,
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '*': {
        target: 'http://boilerplate.test/',
        changeOrigin: true
      }
    }
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
      { ...appSCSSLoader },
      { ...moduleSCSSLoader({ verbatim: true }) },
      { ...moduleSCSSLoader({ verbatim: false }) }
    ]
  },

  watchOptions: {
    poll: true
  },

  plugins: [new webpack.NamedModulesPlugin()]
})
