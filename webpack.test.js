const path = require('path')
const merge = require('webpack-merge')
const { commonConfig, appSCSSLoader, moduleSCSSLoader } = require(path.join(
  __dirname,
  'webpack.common.js'
))

module.exports = merge.smart(commonConfig, {
  mode: 'development',

  module: {
    rules: [
      { ...appSCSSLoader },
      { ...moduleSCSSLoader({ verbatim: true }) },
      { ...moduleSCSSLoader({ verbatim: false }) }
    ]
  }
})
