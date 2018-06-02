import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { PasswordFormLine, PositiveButton } from 'components'

class ChangePasswordFormComponent extends React.Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
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
          <PositiveButton type="submit" className="ml-auto">Change Password</PositiveButton>
        </div>
      </form>
    )
  }
}

const validatePasswordForm = (values) => {
  let errors = {}

  const nonEmptyFieldNames = ['old_password', 'new_password', 'new_password_confirmation']

  nonEmptyFieldNames.forEach((fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'This field is required'
    }
  })

  if (values.new_password && values.new_password_confirmation !== values.new_password) {
    errors.new_password_confirmation = 'This password does not match the new password you entered'
  }

  return errors
}

export const ChangePasswordForm = reduxForm({
  form: 'changePassword',
  validate: validatePasswordForm
})(ChangePasswordFormComponent)
