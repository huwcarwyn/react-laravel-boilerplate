import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import { FormLine, NeutralButton } from 'components'

import { regexes } from '../../constants'

const validate = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!regexes.email.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

export const ForgotPasswordFormComponent = (props) => {
  return (
    <div>
      <Field
        type="text"
        name="email"
        labelText="Enter Your Email Address"
        component={FormLine} />

      <div className="flex items-center">
        <Link className="no-underline text-blue" to="/login">Back to Login</Link>
        <NeutralButton className="ml-auto" type="submit">Request</NeutralButton>
      </div>
    </div>
  )
}

export const ForgotPasswordForm = reduxForm({
  form: 'forgotPassword'
})(ForgotPasswordFormComponent)
