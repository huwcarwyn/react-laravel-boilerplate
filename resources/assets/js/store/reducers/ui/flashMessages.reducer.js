import initialState from '../../initialState'

import { flashMessageActions as actions } from '../../actions'
const { flashMessages } = initialState

export const flashMessagesReducer = (state = flashMessages, action) => {
  switch (action.type) {
  case actions.FLASH_MESSAGE:
    return {
      ...state,
      [action.uid]: {
        'type': action.messageType,
        'message': action.message
      }
    }

  case actions.HIDE_MESSAGE:
    const { ...newState } = state
    delete newState[action.uid]

    return newState

  default:
    return state
  }
}
