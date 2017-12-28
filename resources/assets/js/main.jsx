// Require the react hot loader patch here instead of in the webpack entry,
// since we're using an object for entry and I don't know what key to use.
require("react-hot-loader/patch")

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider, connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { App } from './App'

/**
 * Import Axios Set-Up
 */
import './axios-setup'

/**
 * Import the global styling here, override the webpack CSS loaders since we don't want
 * modules enabled here.
 */
require("../styles/app.scss")

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
