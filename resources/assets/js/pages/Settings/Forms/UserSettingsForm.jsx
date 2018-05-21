import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { PasswordFormLine, PositiveButton, TextFormLine } from 'components'

export class UserSettingsFormComponent extends React.Component {
  render () {
    const { saveUserSettings } = this.props
    return (
      <Fragment>
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
            name="new_password_repeat"
            component={PasswordFormLine}
            labelText="Repeat your new password"
            className="flex-grow pl-4" />
        </div>

        <div className="flex border-grey-light">
          <PositiveButton className="ml-auto" onClick={saveUserSettings}>Save Settings</PositiveButton>
        </div>
      </Fragment>
    )
  }
}

export const UserSettingsFormForm = reduxForm({
  form: 'accountSetting'
})(UserSettingsFormComponent)

const mapStateToProps = (state) => {
  const { session: { currentUser } } = state
  return {
    initialValues: state.entities.users[currentUser]
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: () => {
    dispatch()
  }
})

export const UserSettingsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettingsFormForm)
