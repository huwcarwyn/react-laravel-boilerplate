import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { sessionReducer } from './session.reducer'
import { entitiesReducer } from './entities.reducer'
import { flashMessagesReducer } from './ui/flashMessages.reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  form: formReducer,
  routing: routerReducer,
  flashMessages: flashMessagesReducer
})

export default rootReducer
