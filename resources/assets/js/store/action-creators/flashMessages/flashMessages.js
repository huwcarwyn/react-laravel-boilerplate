import { sleep } from 'utility-functions'

import { flashMessageActions as actions } from 'store/actions'

export const flashMessage = (type, message, timeOut = 5000) => async (dispatch) => {
  const uid = Date.now()

  dispatch({
    type: actions.SHOW_MESSAGE,
    messageType: type,
    uid,
    message
  })

  await sleep(timeOut)

  dispatch({
    type: actions.HIDE_MESSAGE,
    uid
  })
}

export const hideMessage = (uid) => ({
  type: actions.HIDE_MESSAGE,
  uid
})
