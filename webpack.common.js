const path = require('path')
const webpack = require('webpack')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9:/_-]+/g) || []
  }
}

const appSCSSLoader = {
  test: /app.scss/,
  use: [
    {
      loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
    },
    {
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
          tailwindcss('./tailwind.config.js'),
          purgecss({
            content: [
              './resources/assets/js/**/*.jsx'
            ],
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['html', 'js', 'php', 'jsx']
              }
            ]
          })
        ]
      }
    }
  ]
}

const moduleSCSSLoader = {
  test: /\.scss$/,
  exclude: /app.scss/,
  use: [
    {
      loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
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
}

const fileLoader = {
  test: /\.(png|jpg|jpeg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]'
      }
    }
  ]
}

const commonConfig = {
  mode: 'development',

  entry: {
    app: ['babel-polyfill', path.join(__dirname, 'resources/assets/js/main.jsx')]
  },

  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, 'public/'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {...fileLoader}
    ]
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'resources/assets/js'), path.join(__dirname, 'resources/assets/img')],
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}

module.exports = {
  commonConfig,
  appSCSSLoader,
  moduleSCSSLoader,
  fileLoader
}
