import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

export class BillingSettingsFormComponent extends React.Component {
  render () {
    return (
      <div>Billing Settings Placeholder</div>
    )
  }
}

export const BillingSettingsFormForm = reduxForm({
  form: 'appSettings'
})(BillingSettingsFormComponent)

export const BillingSettingsForm = connect(
)(BillingSettingsFormForm)
