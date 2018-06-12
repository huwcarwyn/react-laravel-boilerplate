const path = require('path')
const webpack = require('webpack')
const tailwindcss = require('tailwindcss')

const appSCSSLoader = {
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

const moduleSCSSLoader = {
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
