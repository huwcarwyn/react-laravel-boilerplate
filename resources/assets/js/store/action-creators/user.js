import axios from 'axios'

import { userActions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'
import { flashMessage } from 'store/action-creators/flashMessages'

export const saveUser = (userData) => async (dispatch) => {
  const { id } = userData

  const response = await dispatch(
    makeRequest(
      'save-user-settings',
      () => axios.put(`/api/users/${id}`, userData)
    )
  )

  dispatch(flashMessage('success', 'Successfully saved user info', 2000))

  dispatch({ type: userActions.SET_CURRENT_USER_INFO, user: response.data.data })
}
