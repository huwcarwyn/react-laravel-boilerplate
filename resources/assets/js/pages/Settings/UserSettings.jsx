import { connect } from 'react-redux'
import React, { Fragment } from 'react'

import { userActions } from 'store/actions'
import { uploadUserAvatar } from 'store/action-creators/avatars'
import { flashMessage } from 'store/action-creators/flashMessages'
import { saveUser, changePassword } from 'store/action-creators/user'

import { UserSettingsForm, ChangePasswordForm } from './Forms'

const UserSettingsComponent = ({
  saveUserSettings,
  avatarUploadHandler,
  handleChangePassword
}) => {
  return (
    <Fragment>
      <h3 className="text-grey-darkest font-normal">Your Details</h3>
      <UserSettingsForm
        className="mb-4"
        onSubmit={saveUserSettings}
        avatarUploadHandler={avatarUploadHandler}
      />

      <h3 className="text-grey-darkest font-normal">Change Your Password</h3>
      <ChangePasswordForm onSubmit={handleChangePassword} />
    </Fragment>
  )
}

const userValidationFromResponse = values => {
  let errors = {}

  return errors
}

const passwordValidationFromResponse = values => {
  let errors = {}

  return errors
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
  saveUserSettings: async (userData, { setErrors }) => {
    const response = await dispatch(saveUser(userData))

    if (response.status === 400) {
      setErrors(userValidationFromResponse(response.data.data))
    }

    dispatch(flashMessage('success', 'Successfully saved user info', 4000))

    dispatch({
      type: userActions.SET_CURRENT_USER_INFO,
      users: response.data.data
    })
  },

  uploadUserAvatar: (fileData, userSlug) =>
    dispatch(uploadUserAvatar(fileData, userSlug)),

  changePassword: async (data, { setErrors }) => {
    try {
      await dispatch(changePassword(data))
      dispatch(
        flashMessage('success', 'Your password was successfully changed', 4000)
      )
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(passwordValidationFromResponse(error.response.data.data))
      }

      if (error.response.status === 400) {
        setErrors({
          old_password: 'The current password was incorrect'
        })
      }
    }
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  avatarUploadHandler: fileData => {
    return dispatchProps.uploadUserAvatar(fileData, stateProps.currentUser.slug)
  },
  handleChangePassword: values => {
    const data = {
      slug: stateProps.currentUser.slug,
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
