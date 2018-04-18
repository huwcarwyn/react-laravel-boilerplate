const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const tailwindcss = require('tailwindcss')
const common = require(path.join(__dirname, 'webpack.common.js'))

module.exports = merge.smart(common, {
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

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /app.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              import: 1,
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                './resources/assets/styles'
              ]
            }
          }
        ]
      },
      {
        test: /app.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                './resources/assets/styles'
              ]
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                tailwindcss('./tailwind.config.js')
              ]
            }
          }
        ]
      }
    ]
  },

  watchOptions: {
    poll: true
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
})
