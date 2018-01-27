import initialState from '../initialState'

const { currentUser } = initialState

export const userSessionReducer = (state=currentUser, action) => {
  switch (action.type) {
    case 'USER_SESSION/SET_CURRENT_USER_INFO':
      return {
        id: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email,
      }
    default:
      return state
  }
}
