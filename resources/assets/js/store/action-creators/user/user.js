import axios from 'axios'

import { makeRequest } from 'store/action-creators/requests'

export const saveUser = userData => async dispatch => {
  const { slug } = userData

  const response = await dispatch(
    makeRequest('save-user-settings', () =>
      axios.put(`/api/users/${slug}`, userData)
    )
  )

  return response
}

export const changePassword = data => async dispatch => {
  const { slug } = data

  const response = await dispatch(
    makeRequest('change-user-password', () =>
      axios.put(`/api/users/${slug}/update-password`, data)
    )
  )

  return response
}
