const path = require('path')
const merge = require('webpack-merge')
const common = require(path.join(__dirname, '../webpack.common.js'))

module.exports = merge({
  customizeObject(a, b, key) {
    // We want to override the common entry here.
    if (key === 'entry') {
      return b
    }
  }
})(common, {
  entry: path.join(__dirname, '../resources/assets/js/app.jsx'),
})
