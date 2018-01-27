import initialState from '../../initialState'

const { notifications } = initialState

export const notificationsReducer = (state=notifications, action) => {
  switch (action.type) {
    case 'NOTIFICATIONS/SHOW_NOTIFICATION':
      return {
        ...state,
        [action.uid]: {
          'type': action.messageType,
          'message': action.message,
        }
      }
    case 'NOTIFICATIONS/HIDE_NOTIFICATION':
      const { ...newState } = state
      delete newState[action.uid]

      return newState
    default:
      return state
  }
}
