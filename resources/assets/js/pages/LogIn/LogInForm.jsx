import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { PasswordFormLine, TextFormLine, NeutralButton } from 'components'
import { email as emailRegex } from 'constants/regexes'
import { linkStyle } from 'constants/styles'

const validateLogin = (values) => {
  let errors = {}

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

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field component={TextFormLine} type="text" name="email" labelText="Email" />
      <Field component={PasswordFormLine} type="password" name="password" labelText="Password" />
      <div className="flex items-center">
        <Link className={linkStyle} to="/signup">Or Signup</Link>
        <span className="inline-block px-2">|</span>
        <Link className={linkStyle} to="/forgot-password">Forgot Password?</Link>
        <NeutralButton className="ml-auto" type="submit">Log In</NeutralButton>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate: validateLogin
})(LoginForm)
