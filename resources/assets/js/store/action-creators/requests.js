import { requestActions } from 'store/actions'

export const makeRequest = (actionType, requestCall) => async (dispatch) => {
  dispatch({ type: requestActions.FETCH, actionType })
  try {
    const data = await requestCall()
    dispatch({ type: requestActions.SUCCESS, actionType })
    return data
  } catch (error) {
    dispatch({ type: requestActions.FAILED, error })
    throw error
  }
}
