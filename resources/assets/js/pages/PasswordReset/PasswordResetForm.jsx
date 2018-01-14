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
  }

  return errors
}

export const PasswordResetFormComponent = (props) => {
  return (
    <div>
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
    </div>
  )
}

export const PasswordResetForm = reduxForm({
  form: 'passwordReset',
  validate,
})(PasswordResetFormComponent)
