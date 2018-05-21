import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

export class AppSettingsFormComponent extends React.Component {
  render () {
    return (
      <div>Application Settings Placeholder</div>
    )
  }
}

export const AppSettingsFormForm = reduxForm({
  form: 'appSettings'
})(AppSettingsFormComponent)

export const AppSettingsForm = connect(
)(AppSettingsFormForm)
