import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { FormLine, NeutralButton } from 'components'
import { regexes } from '../../../constants'

const validateSignUp = (values) => {
  let errors = {}

  if (!values.first_name) {
    errors.first_name = 'This field is required'
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required'
  }

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!regexes.email.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'This field is required'
  }

  return errors
}

const SignUpForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field component={FormLine} type="text" name="first_name" labelText="First Name" />
      <Field component={FormLine} type="text" name="last_name" labelText="Last Name" />
      <Field component={FormLine} type="text" name="email" labelText="Email" />
      <Field component={FormLine} type="password" name="password" labelText="Password" />
      <div className="flex items-center">
        <Link className="no-underline text-blue" to="/login">Or Login</Link>
        <NeutralButton className="ml-auto" type="submit">Sign Up</NeutralButton>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup',
  validate: validateSignUp,
})(SignUpForm)
