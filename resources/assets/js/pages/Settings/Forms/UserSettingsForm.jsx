import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { PasswordFormLine, PositiveButton, TextFormLine } from 'components'
import { saveUser } from 'store/action-creators/user'

export class UserSettingsFormComponent extends React.Component {
  render () {
    const { handleSubmit, saveUserSettings } = this.props

    return (
      <form onSubmit={handleSubmit(saveUserSettings)}>
        <h3 className="text-grey-darkest font-normal">Your Details</h3>

        <div className="flex items-center">
          <Field
            name="first_name"
            component={TextFormLine}
            labelText="First Name"
            className="flex-grow" />
          <Field
            name="last_name"
            component={TextFormLine}
            labelText="Last Name"
            className="flex-grow pl-4" />
        </div>

        <Field
          name="email"
          component={TextFormLine}
          labelText="Email"
          className="mb-6" />

        <h3 className="text-grey-darkest font-normal">Change Your Password</h3>

        <Field
          name="old_password"
          component={PasswordFormLine}
          labelText="Enter your old password"
          className="mb-2" />

        <div className="flex items-center mb-4">
          <Field
            name="new_password"
            component={PasswordFormLine}
            labelText="New Password"
            className="flex-grow" />
          <Field
            name="new_password_confirmation"
            component={PasswordFormLine}
            labelText="Repeat your new password"
            className="flex-grow pl-4" />
        </div>

        <div className="flex border-grey-light">
          <PositiveButton type="submit" className="ml-auto">Save Settings</PositiveButton>
        </div>
      </form>
    )
  }
}

export const UserSettingsFormForm = reduxForm({
  form: 'accountSettings'
})(UserSettingsFormComponent)

const mapStateToProps = (state) => {
  const { session: { currentUser } } = state
  return {
    initialValues: state.entities.users[currentUser]
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: async (userData) => {
    await dispatch(saveUser(userData))
  }
})

export const UserSettingsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettingsFormForm)
