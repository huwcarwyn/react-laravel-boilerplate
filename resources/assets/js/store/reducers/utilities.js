import merge from 'lodash.merge'
import { normalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const mergeEntities = (state, entities) => merge({}, state, entities)

export const normalizeAndMerge = (
  entityName,
  schema,
  { singular = false } = {}
) => (state, { [entityName]: rawEntities }) => {
  const { entities } = normalize(rawEntities, singular ? schema : [schema])

  return mergeEntities(state, entities[entityName])
}

export const normalizeAndMergeEntities = schema => (state, { rawEntities }) => {
  const { entities } = normalize(rawEntities, schema || entitiesSchema)

  return mergeEntities(state, entities)
}
