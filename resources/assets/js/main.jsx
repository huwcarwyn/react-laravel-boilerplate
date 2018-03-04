import React from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { App } from './App'

/**
 * Import Axios Set-Up
 */

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

let token = document.head.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common = {
  'X-CSRF-TOKEN': token.content,
  'X-Requested-With': 'XMLHttpRequest'
}

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
