import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { SubmissionError } from 'redux-form'

import SignUpForm from './SignUpForm'

export const SignUpComponent = props => {
  const { submitSignup } = props

  return <SignUpForm onSubmit={submitSignup} />
}

const parseValidationErrorResponse = response => {
  let errors = {}

  if (response.email && response.email.Unique) {
    errors.email = 'This email already exists, please try a different email.'
  }

  return errors
}

const mapDispatchToProps = dispatch => ({
  submitSignup: signUpData => {
    return axios
      .post('/api/signup', signUpData)
      .then(response => {
        if (response.status === 200) {
          // Successful signup, move on to dashboard/overview.
          dispatch(push('/'))
        }
      })
      .catch(error => {
        if (error.response.status === 422) {
          // Invalid data was supplied to the API, show validation errors
          throw new SubmissionError(
            parseValidationErrorResponse(error.response.data.messages)
          )
        }
      })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SignUpComponent)
