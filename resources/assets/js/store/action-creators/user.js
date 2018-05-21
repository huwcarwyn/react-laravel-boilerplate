import axios from 'axios'

import { userActions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const saveUser = (userData) => async (dispatch) => {
  const { id } = userData

  return dispatch(
    makeRequest(
      'save-user-settings',
      () => axios.put(`/api/user/${id}`, userData)
    ))
    .then((response) => {
      dispatch({ type: userActions.save, payload: response.data.data })
    })
}
