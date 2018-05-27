const path = require('path')
const merge = require('webpack-merge')
const glob = require('glob-all')
const tailwindcss = require('tailwindcss')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require(path.join(__dirname, 'webpack.common.js'))

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9:/_-]+/g) || []
  }
}

module.exports = merge.smart(common, {
  mode: 'production',

  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'redux-form', 'axios', 'redux'],
    app: path.join(__dirname, 'resources/assets/js/main.jsx')
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /app.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              import: 1,
              modules: true,
              minimize: true,
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
          }]
        })
      },
      {
        test: /app.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
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
          }]
        })
      }
    ]
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   },
  //   runtimeChunk: {
  //     name: 'manifest'
  //   }
  // },

  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('./css/app.css'),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, 'resources/views/**/*.blade.php'),
        path.join(__dirname, 'resources/assets/js/**/*.+(js|jsx)')
      ]),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js', 'php', 'jsx']
        }
      ]
    })
  ]
})
