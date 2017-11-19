import axios from 'axios'

import { userSessionActions } from '../actions'

const getCurrentUserInfo = () => (dispatch) => {
  axios.get('/api/users/me')
    .then((response) => {
      dispatch({type: userSessionActions.SET_CURRENT_USER_INFO, payload: response.data})
    })
    .catch(() => {
      return null
    })
}

export default {
  getCurrentUserInfo,
}
