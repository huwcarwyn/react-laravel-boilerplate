const path = require('path')

const config = {
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
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader?importLoader=1&modules&localIdentName=[local]_[hash:base64:5]"
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            includePaths: [
              './resources/assets/styles',
            ]
          }
        }]
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

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'resources/assets/js'), 'resources/assets/img'],
    extensions: ['.js', '.jsx', '.json']
  }
}

module.exports = config
