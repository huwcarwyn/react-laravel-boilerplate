import axios from 'axios'

import { userActions } from 'store/actions'

export const getCurrentUserInfo = () => async dispatch => {
  const response = await axios.get('/api/users/me')

  dispatch({
    type: userActions.SET_CURRENT_USER_INFO,
    users: response.data
  })

  return response.data
}

export const logIn = loginDetails => async dispatch => {
  const response = await axios.post('/api/login', loginDetails)

  dispatch({
    type: userActions.SET_CURRENT_USER_INFO,
    users: response.data.data
  })

  return response.data.data
}
