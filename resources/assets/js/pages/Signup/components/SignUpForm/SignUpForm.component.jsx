import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { FieldSet } from 'components'
import { regexes } from '../../../../constants'

import './SignUpForm.scss'

const validateSignUp = (values) => {
  const errors = {}

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

  return (<form styleName="sign-up-form" onSubmit={handleSubmit}>
    <Field component={FieldSet} type="text" name="first_name" labelText="First Name" />
    <Field component={FieldSet} type="text" name="last_name" labelText="Last Name" />
    <Field component={FieldSet} type="text" name="email" labelText="Email" />
    <Field component={FieldSet} type="password" name="password" labelText="Password" />
    <div className="form-line">
      <button styleName="submit-button" className="btn btn-blue" type="submit">Sign Up</button>
    </div>
  </form>)
}

export default reduxForm({
  form: 'signup',
  validate: validateSignUp,
})(SignUpForm)
