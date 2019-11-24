import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'

import { email as emailRegex } from 'constants/regexes'
import { PositiveButton, TextFormLine, PictureUpload } from 'components'

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

  return errors
}

const UserSettingsFormComponent = ({
  user,
  onSubmit,
  className = '',
  avatarUploadHandler
}) => (
  <Formik
    validate={validate}
    onSubmit={onSubmit}
    initialValues={user}
    validateOnChange={false}
  >
    {() => (
      <Form className={className}>
        <div className="flex items-center my-4">
          <Field
            name="avatar"
            component={PictureUpload}
            uploadHandler={avatarUploadHandler}
            className="mr-10"
          />
          <div className="flex-grow">
            <Field
              name="first_name"
              component={TextFormLine}
              labelText="First Name"
            />
            <Field
              name="last_name"
              component={TextFormLine}
              labelText="Last Name"
            />
            <Field name="email" component={TextFormLine} labelText="Email" />
          </div>
        </div>

        <div className="flex border-grey-light">
          <PositiveButton type="submit" className="ml-auto">
            Save User Details
          </PositiveButton>
        </div>
      </Form>
    )}
  </Formik>
)

export const UserSettingsForm = connect(state => {
  const {
    session: { currentUser }
  } = state
  return {
    user: state.entities.users[currentUser]
  }
}, null)(UserSettingsFormComponent)
