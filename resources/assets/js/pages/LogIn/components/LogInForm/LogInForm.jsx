import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormLine, NeutralButton } from 'components'
import { regexes } from 'constants'

import './LogInForm.scss'

const validateLogin = (values) => {
  let errors = {}

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

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form styleName="log-in-form" onSubmit={handleSubmit}>
      <Field component={FormLine} type="text" name="email" labelText="Email" />
      <Field component={FormLine} type="password" name="password" labelText="Password" />
      <div className="form-line">
        <NeutralButton className="float-right" type="submit">Log In</NeutralButton>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate: validateLogin,
})(LoginForm)
