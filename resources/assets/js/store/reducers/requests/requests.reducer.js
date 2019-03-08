import { createReducer } from 'store/reducers/utilities'
import { initialState } from 'store/initialState'
import { requestActions } from 'store/actions'

const { requests } = initialState

const changeRequestState = (state, actionType, offset) => {
  const newState = { ...state }
  if (actionType) {
    if (!newState[actionType]) {
      if (offset > 0) {
        newState[actionType] = offset
      }
    } else {
      newState[actionType] += offset
    }
  }
  return newState
}

const incrementRequestState = (state, { actionType }) =>
  changeRequestState(state, actionType, 1)
const decrementRequestState = (state, { actionType }) =>
  changeRequestState(state, actionType, -1)

export const requestReducer = createReducer(requests, {
  [requestActions.REQUEST]: incrementRequestState,
  [requestActions.SUCCESS]: decrementRequestState
})
