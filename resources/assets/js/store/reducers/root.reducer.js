import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { sessionReducer } from './session.reducer'
import { notificationsReducer } from './ui/notifications.reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  form: formReducer,
  routing: routerReducer,
  notifications: notificationsReducer,
})

export default rootReducer
