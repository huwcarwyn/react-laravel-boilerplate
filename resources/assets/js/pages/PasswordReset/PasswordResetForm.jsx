import React from 'react'
import { Formik, Form, Field } from 'formik'

import { TextFormLine, PasswordFormLine, NeutralButton } from 'components'

const validate = (values = {}) => {
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
    errors.password_confirmation = "The two passwords don't match"
  }

  return errors
}

export const PasswordResetForm = ({ onSubmit }) => {
  return (
    <Formik validate={validate} onSubmit={onSubmit}>
      {props => (
        <Form>
          <Field
            type="text"
            name="email"
            labelText="Enter your Email"
            component={TextFormLine}
          />

          <Field
            type="password"
            name="password"
            labelText="Enter a New Password"
            component={PasswordFormLine}
          />

          <Field
            type="password"
            name="password_confirmation"
            labelText="Confirm Your New Password"
            component={PasswordFormLine}
          />

          <NeutralButton className="float-right" type="submit">
            Set New Password
          </NeutralButton>
        </Form>
      )}
    </Formik>
  )
}
