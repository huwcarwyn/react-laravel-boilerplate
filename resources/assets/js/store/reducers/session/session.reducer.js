import { initialState } from 'store/initialState'
import { userActions } from 'store/actions'
import { createReducer } from 'store/reducers/utilities'

const { session } = initialState

const setCurrentUser = (state, { user }) => {
  return {
    ...state,
    currentUser: user.id
  }
}

export const sessionReducer = createReducer(session, {
  [userActions.SET_CURRENT_USER_INFO]: setCurrentUser
})
