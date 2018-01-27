import { sleep } from 'utility-functions'

import { notificationActions as actions } from '../actions'

export const flashNotification = (type, message, timeOut=5000) => async (dispatch) => {
	const uid = Date.now()

	dispatch({
		type: actions.SHOW_NOTIFICATION,
		messageType: type,
		uid,
		message,
	})

	await sleep(timeOut)

	dispatch({
		type: actions.HIDE_NOTIFICATION,
		uid,
	})
}

export const hideNotification = (uid) => ({
	type: actions.HIDE_NOTIFICATION,
	uid,
})
