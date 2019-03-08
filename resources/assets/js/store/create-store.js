/* global compose */
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import { rootReducer } from 'store/reducers'

export const browserHistory = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/reducers', () => {
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export const store = configureStore()
