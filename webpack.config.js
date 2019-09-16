const path = require('path')
const webpack = require('webpack')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9:/_-]+/g) || []
  }
}

const appSCSSLoader = {
  test: /app.scss/,
  use: [
    {
      loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        minimize: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: ['./resources/assets/styles']
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          tailwindcss('./tailwind.config.js'),
          ...(isProd
            ? [
              purgecss({
                content: [
                  './resources/views/**/*.blade.php',
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
            : [])
        ]
      }
    }
  ]
}

const moduleSCSSLoader = ({ verbatim }) => ({
  test: verbatim ? /\.verbatim.scss$/ : /\.scss$/,
  exclude: verbatim ? /app.scss/ : [/\.verbatim.scss$/, /app.scss/],
  use: [
    {
      loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        import: 1,
        minimize: true,
        modules: !verbatim,
        localIdentName: '[local]_[hash:base64:5]'
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: ['./resources/assets/styles']
      }
    }
  ]
})

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

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    app: path.join(__dirname, 'resources/assets/js/main.jsx')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { ...fileLoader },
      { ...appSCSSLoader },
      { ...moduleSCSSLoader({ verbatim: false }) },
      { ...moduleSCSSLoader({ verbatim: true }) }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  output: {
    filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
    path: path.join(__dirname, 'public/'),
    publicPath: '/'
  },

  devtool: isProd ? undefined : 'inline-source-map',

  devServer: isProd
    ? undefined
    : {
      host: 'localhost',
      port: 9000,
      historyApiFallback: true,
      hot: true,
      inline: true,
      contentBase: path.join(__dirname, 'public'),

      proxy: {
        '*': {
          target: 'http://boilerplate.test/',
          changeOrigin: true
        }
      },

      watchOptions: {
        aggregateTimeout: 300,
        poll: 2000
      }
    },

  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: [
      'node_modules',
      path.join(__dirname, 'resources/assets/js'),
      path.join(__dirname, 'resources/assets/img')
    ],
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),

    new webpack.NamedModulesPlugin(),

    new ManifestPlugin({
      // Call the manifest mix-manifest so that we can use
      // Laravel's mix() helper to serve assets
      fileName: 'mix-manifest.json',
      basePath: '/'
    }),

    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css'
    })
  ]
}
