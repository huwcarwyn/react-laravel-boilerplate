const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { commonConfig, appSCSSLoader, moduleSCSSLoader } = require(path.join(
  __dirname,
  "webpack.common.js"
));

module.exports = merge.smart(commonConfig, {
  mode: "production",

  entry: {
    app: path.join(__dirname, "resources/assets/js/main.jsx")
  },

  module: {
    rules: [
      { ...appSCSSLoader },
      { ...moduleSCSSLoader({ verbatim: true }) },
      { ...moduleSCSSLoader({ verbatim: false }) }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css"
    })
  ]
});
