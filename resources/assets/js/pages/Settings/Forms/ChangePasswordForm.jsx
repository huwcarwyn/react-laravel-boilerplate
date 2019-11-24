import React from 'react'
import { Formik, Form, Field } from 'formik'

import { PasswordFormLine, PositiveButton } from 'components'

const validate = (values = {}) => {
  let errors = {}

  const nonEmptyFieldNames = [
    'old_password',
    'new_password',
    'new_password_confirmation'
  ]

  nonEmptyFieldNames.forEach(fieldName => {
    if (!values[fieldName]) {
      errors[fieldName] = 'This field is required'
    }
  })

  if (
    values.new_password &&
    values.new_password_confirmation !== values.new_password
  ) {
    errors.new_password_confirmation =
      'This password does not match the new password you entered'
  }

  return errors
}

export const ChangePasswordForm = ({ onSubmit }) => (
  <Formik
    validate={validate}
    onSubmit={onSubmit}
    initialValues={{
      old_password: '',
      new_password: '',
      new_password_confirmation: ''
    }}
  >
    {props => (
      <Form>
        <Field
          className="mb-2"
          name="old_password"
          component={PasswordFormLine}
          labelText="Enter your old password"
        />

        <div className="flex items-start mb-4">
          <Field
            name="new_password"
            className="flex-grow"
            labelText="New Password"
            component={PasswordFormLine}
          />
          <Field
            className="flex-grow pl-4"
            component={PasswordFormLine}
            name="new_password_confirmation"
            labelText="Repeat your new password"
          />
        </div>

        <div className="flex border-grey-light">
          <PositiveButton type="submit" className="ml-auto">
            Change Password
          </PositiveButton>
        </div>
      </Form>
    )}
  </Formik>
)
