import cloneDeep from 'lodash.clonedeep'

import { userActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { user as userSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { users: usersState }
} = initialState

const setUserAvatar = (state, { avatar, userSlug }) => {
  const newState = cloneDeep(state)
  newState[userSlug].avatar = avatar

  return newState
}

export const usersReducer = createReducer(usersState, {
  [userActions.SET_AVATAR]: setUserAvatar,
  [userActions.SET_CURRENT_USER_INFO]: normalizeAndMerge('users', userSchema, {
    singular: true
  })
})
