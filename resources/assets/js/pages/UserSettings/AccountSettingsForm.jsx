import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { TextFormLine, PositiveButton } from 'components'

export class AccountSettingsFormComponent extends React.Component {
  render () {
    const { saveUserSettings } = this.props
    return (
      <Fragment>
        <div className="flex items-center">
          <Field
            name="first_name"
            component={TextFormLine}
            labelText="First Name"
            className="flex-grow" />
          <Field
            name="last_name"
            component={TextFormLine}
            labelText="Last Name"
            className="flex-grow pl-4" />
        </div>

        <Field
          name="email"
          component={TextFormLine}
          labelText="Email"
          className="mb-2" />

        <div className="flex border-grey-light">
          <PositiveButton className="ml-auto" onClick={saveUserSettings}>Save Settings</PositiveButton>
        </div>
      </Fragment>
    )
  }
}

export const AccountSettingsFormForm = reduxForm({
  form: 'accountSetting'
})(AccountSettingsFormComponent)

const mapStateToProps = (state) => {
  const { session: { currentUser } } = state
  return {
    initialValues: state.entities.users[currentUser]
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserSettings: () => {
    dispatch()
  }
})

export const AccountSettingsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettingsFormForm)
