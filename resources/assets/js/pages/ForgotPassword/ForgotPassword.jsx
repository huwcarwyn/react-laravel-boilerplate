import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { SubmissionError } from 'redux-form'
import { flashMessage } from 'store/action-creators/flashMessages'

import { ForgotPasswordForm } from './ForgotPasswordForm'

export const ForgotPasswordComponent = props => {
  const { submitForgotPassword } = props
  return <ForgotPasswordForm onSubmit={submitForgotPassword} />
}

const mapDispatchToProps = dispatch => ({
  submitForgotPassword: async values => {
    try {
      await axios.post('/api/forgot-password', values)

      dispatch(push('/login'))
      dispatch(
        flashMessage(
          'success',
          'The password reset request has been sent to your Email inbox.'
        )
      )
    } catch (error) {
      throw new SubmissionError(error.response.data)
    }
  }
})

export default connect(
  null,
  mapDispatchToProps
)(ForgotPasswordComponent)
