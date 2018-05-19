import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { TextFormLine, NeutralButton } from 'components'

const validate = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = 'This field is required'
  }

  if (!values.password) {
    errors.password = 'This field is required'
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'This field is required'
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = 'The two passwords don\'t match'
  }

  return errors
}

export const PasswordResetFormComponent = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="email"
        labelText="Enter your Email"
        component={TextFormLine} />

      <Field
        type="password"
        name="password"
        labelText="Enter a New Password"
        component={TextFormLine} />

      <Field
        type="password"
        name="password_confirmation"
        labelText="Confirm Your New Password"
        component={TextFormLine} />

      <NeutralButton className="float-right" type="submit">Set New Password</NeutralButton>
    </form>
  )
}

export const PasswordResetForm = reduxForm({
  form: 'passwordReset',
  validate
})(PasswordResetFormComponent)
