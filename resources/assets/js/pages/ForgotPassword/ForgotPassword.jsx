import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'

import { history } from 'utils/history'
import { flashMessage } from 'store/action-creators/flashMessages'

import { ForgotPasswordForm } from './ForgotPasswordForm'

export const ForgotPasswordComponent = props => {
  const { submitForgotPassword } = props
  return <ForgotPasswordForm onSubmit={submitForgotPassword} />
}

export default connect(null, dispatch => ({
  submitForgotPassword: async values => {
    try {
      await axios.post('/api/forgot-password', values)

      history.push('/login')
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
}))(ForgotPasswordComponent)
