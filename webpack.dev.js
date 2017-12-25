const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require(path.join(__dirname, 'webpack.common.js'))

module.exports = merge(common, {
  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: 9000,
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, "public"),
    proxy: {
      '*': {
        target: 'http://boilerplate.test/',
        changeOrigin: true,
      },
    }
  },

	watchOptions: {
	  poll: true
	},

  plugins: [
  	new webpack.NamedModulesPlugin(),
  ]
})
