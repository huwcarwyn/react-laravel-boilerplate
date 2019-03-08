import React from 'react'
import { connect } from 'react-redux'

import {
  NeutralFlashMessage,
  NegativeFlashMessage,
  WarningFlashMessage,
  PositiveFlashMessage
} from './FlashMessages'
import { hideMessage } from 'store/action-creators/flashMessages'

export const FlashMessageComponent = props => {
  const { flashMessages, handleHideMessage } = props

  return (
    <div className="absolute pin-t pin-r pin-l">
      {flashMessages &&
        Object.keys(flashMessages).map((messageUid, index) => {
          const { type, message } = flashMessages[messageUid]
          const onDeleteClick = () => handleHideMessage(messageUid)

          let MessageComponent
          switch (type) {
            case 'neutral':
              MessageComponent = NeutralFlashMessage
              break
            case 'success':
              MessageComponent = PositiveFlashMessage
              break
            case 'warn':
              MessageComponent = WarningFlashMessage
              break
            case 'danger':
              MessageComponent = NegativeFlashMessage
              break
          }

          return (
            <MessageComponent
              key={index}
              message={message}
              onDeleteClick={onDeleteClick}
            />
          )
        })}
    </div>
  )
}

const mapStateToProps = state => ({
  flashMessages: state.flashMessages
})

const mapDispatchToProps = dispatch => ({
  handleHideMessage: uid => {
    dispatch(hideMessage(uid))
  }
})

export const FlashMessageRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashMessageComponent)
