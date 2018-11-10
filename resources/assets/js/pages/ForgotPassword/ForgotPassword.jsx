import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { flashMessage } from 'store/action-creators/flashMessages'

import { ForgotPasswordForm } from './ForgotPasswordForm'

export const ForgotPasswordComponent = (props) => {
  const { submitForgotPassword } = props
  return (
    <ForgotPasswordForm onSubmit={submitForgotPassword} />
  )
}

const mapDispatchToProps = (dispatch) => ({
  submitForgotPassword: (values) => {
    axios.post('/api/forgot-password', values)
      .then((response) => {
        if (response.status === 200) {
          dispatch(push('/login'))
          dispatch(flashMessage('success', 'The password reset request has been sent to your Email inbox.'))
        } else if (response.status === 422) {
          throw new SubmissionError(response.messages)
        }
      })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(ForgotPasswordComponent)
