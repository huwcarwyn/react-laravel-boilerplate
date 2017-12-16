import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import { syncHistoryWithStore, routerMiddleware, ConnectedRouter } from 'react-router-redux'
import thunk from 'redux-thunk'

import { rootReducer } from 'store/reducers'
import { DashboardLayout } from 'layouts/Dashboard'
import { SignUp, LogIn, UserOverview } from 'pages'
import { AuthGuard } from 'components'

/**
 * Import Axios Set-Up
 */
import './axios-setup'

/**
 * Import the global styling here, override the webpack CSS loaders since we don't want
 * modules enabled here.
 */
require("../styles/app.scss")

const browserHistory = createHistory()

/**
 * Create the Redux store.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)))
)

const App = (props) => {
  return (<ConnectedRouter history={browserHistory}>
    <Switch>
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <AuthGuard>
        <DashboardLayout>
          <Route path='/overview' component={UserOverview} />
        </DashboardLayout>
      </AuthGuard>
    </Switch>
  </ConnectedRouter>)
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
