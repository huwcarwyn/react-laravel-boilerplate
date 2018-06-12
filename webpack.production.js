const path = require('path')
const merge = require('webpack-merge')
const glob = require('glob-all')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {
  commonConfig,
  appSCSSLoader,
  moduleSCSSLoader
} = require(path.join(__dirname, 'webpack.common.js'))

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9:/_-]+/g) || []
  }
}

module.exports = merge.smart(commonConfig, {
  mode: 'production',

  entry: {
    app: path.join(__dirname, 'resources/assets/js/main.jsx')
  },

  module: {
    rules: [
      {...appSCSSLoader},
      {...moduleSCSSLoader}
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
