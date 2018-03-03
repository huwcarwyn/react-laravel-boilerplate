import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { App } from './App'

/**
 * Import Axios Set-Up
 */
import './axios-setup'

/**
 * Import the global styling here, override the webpack CSS loaders since we don't want
 * modules enabled here.
 */
require('../styles/app.scss')

render(
  <AppContainer warnings={false}>
    <App />
  </AppContainer>,
  document.getElementById('app')
)

/**
 * Webpack Hot Module Replacement API
 */
if (module.hot) {
  module.hot.accept()
}
