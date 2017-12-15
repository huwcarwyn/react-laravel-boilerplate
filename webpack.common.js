const path = require('path')
const tailwindcss = require('tailwindcss')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, 'resources/assets/js/app.jsx'),
  },

  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, 'public/')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread',
            'transform-es2015-destructuring',
            ["react-css-modules", {
              "filetypes": {
                ".scss": {
                  "syntax": "postcss-scss",
                  "plugins": ["postcss-nested"]
                }
              },
              "generateScopedName": "[local]_[hash:base64:5]"
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        exclude:/app.scss/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              import: 1,
              modules: true,
              localIdentName: "[local]_[hash:base64:5]",
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [
                './resources/assets/styles',
              ]
            }
          }]
        })
      },
      {
        test: /app.scss/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [
                './resources/assets/styles',
              ],
            }
          }, {
            loader: "postcss-loader",
            options: {
              plugins: [
                  tailwindcss('./tailwind.config.js')
              ]
            }
          }]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./css/app.css'),
  ],

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'resources/assets/js'), path.join(__dirname, 'resources/assets/img')],
    extensions: ['.js', '.jsx', '.json']
  }
}
