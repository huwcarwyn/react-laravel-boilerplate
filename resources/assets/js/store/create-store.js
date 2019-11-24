import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import { rootReducer } from 'store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  if (module.hot) {
    module.hot.accept('store/reducers', () => {
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export const store = configureStore()
