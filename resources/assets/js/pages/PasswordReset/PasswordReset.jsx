import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'

import { PasswordResetForm } from './PasswordResetForm'

export const PasswordResetComponent = (props) => {
  const { submitPasswordReset, match } = props
  console.log(match.params.resetToken)
  return (
    <PasswordResetForm onSubmit={submitPasswordReset} />
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitPasswordReset: (values) => {
    const { match } = ownProps
    axios.post('/api/reset-password', {
      ...values,
      token: match.params.resetToken
    })
      .then((response) => {
        if (response.status === 200) {

        } else if (response.status === 422) {
          throw new SubmissionError(response)
        }
      })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(PasswordResetComponent)
