import axios from 'axios'

import { userSessionActions as Actions } from '../actions'

const getCurrentUserInfo = () => (dispatch) => {
  return axios.get('/api/users/me')
    .then((response) => {
      dispatch({type: Actions.SET_CURRENT_USER_INFO, payload: response.data})

      return response
    })
}

export default {
  getCurrentUserInfo,
}
