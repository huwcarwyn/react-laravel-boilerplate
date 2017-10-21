import initialState from '../initialState'

const { currentUser } = initialState

const userSessionReducer = (state=currentUser, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_DATA':
      return {
        ...action.userData
      }
    default:
      return state
  }
}

export default userSessionReducer
