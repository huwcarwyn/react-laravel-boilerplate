import { merge } from 'lodash'
import { normalize } from 'normalizr'

import { initialState } from 'store/initialState'
import { sessionActions } from 'store/actions'
import { createReducer } from 'store/reducers/utilities'
import { user as userSchema } from 'store/schemas'

const { entities } = initialState

const mergeEntities = (state, entities) => merge({}, state, entities)

const addUsersToStore = (state, { user }) => {
  const { entities } = normalize(user, userSchema)

  return mergeEntities(state, entities)
}

export const entitiesReducer = createReducer(entities, {
  [sessionActions.SET_CURRENT_USER_INFO]: addUsersToStore
})
