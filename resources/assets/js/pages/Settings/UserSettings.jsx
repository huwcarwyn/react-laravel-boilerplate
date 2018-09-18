import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'

import { userActions } from 'store/actions'
import { uploadUserAvatar } from 'store/action-creators/avatars'
import { flashMessage } from 'store/action-creators/flashMessages'
import { saveUser, changePassword } from 'store/action-creators/user'

import { UserSettingsForm, ChangePasswordForm } from './Forms'

class UserSettingsComponent extends React.Component {
  render () {
    const { saveUserSettings, handleChangePassword, avatarUploadHandler } = this.props
    return (
      <Fragment>
        <h3 className="text-grey-darkest font-normal">Your Details</h3>
        <UserSettingsForm
          className="mb-4"
          onSubmit={saveUserSettings}
          avatarUploadHandler={avatarUploadHandler} />

        <h3 className="text-grey-darkest font-normal">Change Your Password</h3>
        <ChangePasswordForm onSubmit={handleChangePassword} />
      </Fragment>
    )
  }
}

const userValidationFromResponse = (values) => {
  let errors = {}

  return errors
}

const passwordValidationFromResponse = (values) => {
  let errors = {}

  return errors
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: async (userData) => {
    const response = await dispatch(saveUser(userData))

    if (response.status === 400) {
      throw new SubmissionError(
        'accountSettings',
        userValidationFromResponse(response.data.data)
      )
    }

    dispatch(flashMessage('success', 'Successfully saved user info', 4000))

    dispatch({ type: userActions.SET_CURRENT_USER_INFO, user: response.data.data })
  },

  uploadUserAvatar: (fileData, userId) => dispatch(uploadUserAvatar(fileData, userId)),

  changePassword: async (data) => {
    try {
      await dispatch(changePassword(data))
      dispatch(flashMessage('success', 'Your password was successfully changed', 4000))
    } catch (error) {
      if (error.response.status === 422) {
        throw new SubmissionError(
          passwordValidationFromResponse(error.response.data.data)
        )
      }

      if (error.response.status === 400) {
        throw new SubmissionError(
          {
            'old_password': 'The current password was incorrect'
          }
        )
      }
    }
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  avatarUploadHandler: (fileData) => {
    return dispatchProps.uploadUserAvatar(fileData, stateProps.currentUser.id)
  },
  handleChangePassword: (values) => {
    const data = {
      user_id: stateProps.currentUser.id,
      ...values
    }

    return dispatchProps.changePassword(data)
  }
})

export const UserSettings = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(UserSettingsComponent)
