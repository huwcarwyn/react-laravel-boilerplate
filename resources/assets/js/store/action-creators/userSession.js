import axios from 'axios'

import { userSessionActions } from '../actions'

const getCurrentUserInfo = () => (dispatch) => {
  axios.get('/api/users/me')
    .then((userData) => {
      dispatch({type: userSessionActions.SET_CURRENT_USER_INFO, userData})
    })
    .catch(() => {
      return null
    })
}

export default {
  getCurrentUserInfo,
}
