import React from 'react'
import axios from 'axios'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { SubmissionError } from 'redux-form'

import { history } from 'utils/history'
import { flashMessage } from 'store/action-creators/flashMessages'

import { PasswordResetForm } from './PasswordResetForm'

export const PasswordResetComponent = props => {
  const { submitPasswordReset } = props
  return <PasswordResetForm onSubmit={submitPasswordReset} />
}

const parseValidationFromResponse = data => {
  const errors = {}

  if (
    data.errors.password &&
    data.errors.password.includes('The password must be at least 6 characters.')
  ) {
    errors.password = 'The password must be at least 6 characters.'
  }

  return errors
}

export default compose(
  withRouter,
  connect(null, (dispatch, ownProps) => ({
    submitPasswordReset: async values => {
      const { match } = ownProps

      try {
        await axios.post('/api/reset-password', {
          ...values,
          token: match.params.resetToken
        })

        history.push('/login')
        dispatch(flashMessage('success', 'Password successfully reset'))
      } catch (error) {
        throw new SubmissionError(
          parseValidationFromResponse(error.response.data)
        )
      }
    }
  }))
)(PasswordResetComponent)
