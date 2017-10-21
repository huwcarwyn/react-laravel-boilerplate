import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userSessionReducer from './userSession.reducer'

const rootReducer = combineReducers({
  currentUser: userSessionReducer,
  form: formReducer,
  routing: routerReducer,
})

export default rootReducer
