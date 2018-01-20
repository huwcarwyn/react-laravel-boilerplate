import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import { FormLine, NeutralButton } from 'components'

import { regexes } from '../../constants'

const validate = (values) => {
  let errors = {}

  if (!values.password) {
    errors.password = 'This field is required'
  }

  if (!values.password_confirm) {
    errors.password_confirm = 'This field is required'
  } else if (values.password !== values.password_confirm) {
    errors.password_confirm = 'The two passwords don\'t match'
  }

  return errors
}

export const PasswordResetFormComponent = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="password"
        name="password"
        labelText="Enter a New Password"
        component={FormLine} />

        <Field
          type="password"
          name="password_confirm"
          labelText="Confirm Your New Password"
          component={FormLine} />

      <NeutralButton className="float-right" type="submit">Set New Password</NeutralButton>
    </form>
  )
}

export const PasswordResetForm = reduxForm({
  form: 'passwordReset',
  validate,
})(PasswordResetFormComponent)
