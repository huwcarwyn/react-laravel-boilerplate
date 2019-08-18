import axios from 'axios'

import { makeRequest } from 'store/action-creators/requests'
import { userActions as actions } from 'store/actions'

export const uploadUserAvatar = (fileData, userSlug) => async dispatch => {
  const response = await dispatch(
    makeRequest('set-user-avatar', () => axios.post('/api/avatars', fileData))
  )

  dispatch({
    type: actions.SET_AVATAR,
    userSlug,
    avatar: response.data.fileUrl
  })
}
