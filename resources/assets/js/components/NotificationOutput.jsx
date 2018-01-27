import React from 'react'
import { connect } from 'react-redux'

import {
	NeutralNotification,
	NegativeNotification,
	WarningNotification,
	PositiveNotification
} from 'components/Notifications'
import { hideNotification } from 'store/action-creators/notifications'

export const NotificationOutputComponent = (props) => {
  const { notifications } = props

  return (
    <div className="absolute pin-t pin-r pin-l">
      {notifications && Object.keys(notifications).map((notificationUid, index) => {
        const { type, message } = notifications[notificationUid]
        const onDeleteClick = () => handleHideNotification(notificationUid)

        let NotificationComponent
        switch (type) {
          case 'success':
          	NotificationComponent = PositiveNotification
          	break
					case 'warn':
						NotificationComponent = WarningNotification
						break
					case 'danger':
						NotificationComponent = NegativeNotification
						break
        }

				return <NotificationComponent
					key={index}
					message={message}
					onDeleteClick={onDeleteClick} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
})

const mapDispatchToProps = (dispatch) => ({
	handleHideNotification: (uid) => {
		dispatch(hideNotification(uid))
	}
})

export const NotificationOutput = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationOutputComponent)
