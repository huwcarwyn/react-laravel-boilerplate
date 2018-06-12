const path = require('path')
const {
  appSCSSLoader,
  moduleSCSSLoader,
  moduleResolvePaths,
  moduleExtensions,
  fileLoader
} = require(path.join(__dirname, '../webpack.common.js'))

module.exports = baseConfig => {

  baseConfig.module.rules = [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {...appSCSSLoader},
    {...moduleSCSSLoader},
    {...fileLoader}
  ]

  baseConfig.resolve.modules.push('node_modules', path.join(__dirname, '../resources/assets/js'), path.join(__dirname, '../resources/assets/img'))
  baseConfig.resolve.extensions.push('.js', '.jsx', '.json')

  return baseConfig
};
