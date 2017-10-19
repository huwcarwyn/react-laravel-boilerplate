const path = require('path')
const webpackBaseConfig = require(path.join(__dirname, '../webpack.base.config.js'))

const storyBookConfig = Object.assign(webpackBaseConfig, {
  entry: path.join(__dirname, '../resources/assets/js/app.jsx'),
})

module.exports = storyBookConfig
