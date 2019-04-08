import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { sessionActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { createReducer } from 'store/reducers/utilities'

import { sessionReducer } from '../session/session.reducer'
import { requestReducer } from '../requests/requests.reducer'
import { entitiesReducer } from '../entities/entities.reducer'
import { flashMessagesReducer } from '../ui/flashMessages.reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  form: formReducer,
  routing: routerReducer,
  flashMessages: flashMessagesReducer,
  requests: requestReducer
})

const globalReducer = createReducer(initialState, {
  [sessionActions.LOGOUT]: () => initialState
})

export default reduceReducers(initialState, rootReducer, globalReducer)
