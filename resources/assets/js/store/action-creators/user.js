import axios from 'axios'

import { makeRequest } from 'store/action-creators/requests'

export const saveUser = (userData) => async (dispatch) => {
  const { id } = userData

  const response = await dispatch(
    makeRequest(
      'save-user-settings',
      () => axios.put(`/api/users/${id}`, userData)
    )
  )

  return response
}

export const changePassword = (data) => async (dispatch) => {
  const { user_id: userId } = data

  const response = await dispatch(
    makeRequest(
      'change-user-password',
      () => axios.put(`/api/users/${userId}/update-password`, data)
    )
  )

  return response
}
