import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import { initialState } from 'store/initialState'
import { createReducer } from 'store/reducers/utilities'

import { usersReducer } from './users.reducer'

const { entities } = initialState

const singleEntitiesReducer = combineReducers({
  users: usersReducer
})

const wholeEntitiesReducer = createReducer(entities, {})

export const entitiesReducer = reduceReducers(
  entities,
  singleEntitiesReducer,
  wholeEntitiesReducer
)
