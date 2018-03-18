import axios from 'axios'

import { sessionActions } from 'store/actions'

export const getCurrentUserInfo = () => (dispatch) => {
  return axios.get('/api/users/me')
    .then((response) => {
      dispatch({type: sessionActions.SET_CURRENT_USER_INFO, user: response.data})
      return response
    })
}
