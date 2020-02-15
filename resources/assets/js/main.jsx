import React from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { App } from './app'

import '../styles/app.scss'
import 'react-context-modals/dist/main.css'

/**
 * Import Axios Set-Up
 */

let token = document.head.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common = {
  'X-CSRF-TOKEN': token.content,
  'X-Requested-With': 'XMLHttpRequest'
}

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
