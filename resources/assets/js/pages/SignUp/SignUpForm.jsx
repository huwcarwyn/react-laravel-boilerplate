import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { linkStyle } from 'constants/styles'
import { email as emailRegex } from 'constants/regexes'
import { PasswordFormLine, TextFormLine, NeutralButton } from 'components'

const validate = (values = {}) => {
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

export const SignUpForm = ({ onSubmit }) => (
  <Formik
    validate={validate}
    onSubmit={onSubmit}
    initialValues={{ first_name: '', last_name: '', email: '', password: '' }}
  >
    {() => (
      <Form>
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
      </Form>
    )}
  </Formik>
)
