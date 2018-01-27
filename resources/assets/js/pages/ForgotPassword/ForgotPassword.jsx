import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { flashNotification } from 'store/action-creators/notifications'
import { PaddedCard } from 'components'

import { ForgotPasswordForm } from './ForgotPasswordForm'

export const ForgotPasswordComponent = (props) => {
  const { submitForgotPassword } = props
  return (
    <PaddedCard className="mt-20 mx-auto">
      <h1 className="text-center text-grey-darkest mb-4">Recover Your Password</h1>
      <ForgotPasswordForm onSubmit={submitForgotPassword} />
    </PaddedCard>
  )
}

const mapDispatchToProps = (dispatch) => ({
  submitForgotPassword: (values) => {
    axios.post('/api/forgot-password', values)
      .then((response) => {
        if (response.status === 200) {
          dispatch(push('/login'))
          dispatch(flashNotification('success', 'The password reset request has been sent to your Email inbox.'))
        } else if (response.status === 422) {
          throw new SubmissionError(response)
        }
      })
  },
})

export const ForgotPassword = connect(
  null,
  mapDispatchToProps
)(ForgotPasswordComponent)
