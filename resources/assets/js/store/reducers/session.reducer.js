import initialState from '../initialState'

const { session } = initialState

export const sessionReducer = (state = session, action) => {
  switch (action.type) {
  case 'USER_SESSION/SET_CURRENT_USER_INFO':
    return {
      ...state,
      currentUser: {
        id: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email
      }
    }
  default:
    return state
  }
}
