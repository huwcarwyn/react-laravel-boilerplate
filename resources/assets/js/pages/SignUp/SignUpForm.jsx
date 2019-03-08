import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { PasswordFormLine, TextFormLine, NeutralButton } from 'components'
import { email as emailRegex } from 'constants/regexes'
import { linkStyle } from 'constants/styles'

const validateSignUp = values => {
  let errors = {}

  if (!values.first_name) {
    errors.first_name = 'This field is required'
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required'
  }

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'This field is required'
  }

  return errors
}

const SignUpForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={TextFormLine}
        type="text"
        name="first_name"
        labelText="First Name"
      />
      <Field
        component={TextFormLine}
        type="text"
        name="last_name"
        labelText="Last Name"
      />
      <Field
        component={TextFormLine}
        type="text"
        name="email"
        labelText="Email"
      />
      <Field
        component={PasswordFormLine}
        type="password"
        name="password"
        labelText="Password"
      />
      <div className="flex items-center">
        <Link className={linkStyle} to="/login">
          Or Login
        </Link>
        <NeutralButton className="ml-auto" type="submit">
          Sign Up
        </NeutralButton>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup',
  validate: validateSignUp
})(SignUpForm)
