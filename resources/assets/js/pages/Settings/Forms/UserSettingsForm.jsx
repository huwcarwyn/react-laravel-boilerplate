import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { PositiveButton, TextFormLine, PictureUpload } from 'components'
import { email as emailRegex } from 'constants/regexes'

export class UserSettingsFormComponent extends React.Component {
  render() {
    const { handleSubmit, avatarUploadHandler, className } = this.props

    return (
      <form className={className} onSubmit={handleSubmit}>
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
      </form>
    )
  }
}

const validateUserSettings = values => {
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

const UserSettingsFormForm = reduxForm({
  form: 'accountSettings',
  enableReinitialize: true,
  validate: validateUserSettings
})(UserSettingsFormComponent)

const mapStateToProps = state => {
  const {
    session: { currentUser }
  } = state
  return {
    initialValues: state.entities.users[currentUser]
  }
}

export const UserSettingsForm = connect(
  mapStateToProps,
  null
)(UserSettingsFormForm)
