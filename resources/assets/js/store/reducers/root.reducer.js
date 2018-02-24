import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { sessionReducer } from './session.reducer'
import { flashMessagesReducer } from './ui/flashMessages.reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  form: formReducer,
  routing: routerReducer,
  flashMessages: flashMessagesReducer,
})

export default rootReducer
