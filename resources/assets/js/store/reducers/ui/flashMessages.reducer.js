import { initialState } from 'store/initialState'
import { flashMessageActions as actions } from 'store/actions'
import { createReducer } from 'store/reducers/utilities'

const { flashMessages } = initialState

const showMessage = (state, action) => ({
  ...state,
  [action.uid]: {
    type: action.messageType,
    message: action.message
  }
})

const hideMessage = (state, action) => {
  const { ...newState } = state
  delete newState[action.uid]

  return newState
}

export const flashMessagesReducer = createReducer(flashMessages, {
  [actions.SHOW_MESSAGE]: showMessage,
  [actions.HIDE_MESSAGE]: hideMessage
})
