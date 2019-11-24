import React from 'react'
import axios from 'axios'

import { history } from 'utils/history'

import { SignUpForm } from './SignUpForm'

const parseValidationErrorResponse = response => {
  let errors = {}

  if (response.email && response.email.Unique) {
    errors.email = 'This email already exists, please try a different email.'
  }

  return errors
}

export const SignUp = () => {
  const onSubmit = signUpData => {
    return axios
      .post('/api/signup', signUpData)
      .then(response => {
        if (response.status === 200) {
          history.push('/')
        }
      })
      .catch(error => {
        if (error.response.status === 422) {
          // throw new SubmissionError(
          //   parseValidationErrorResponse(error.response.data.messages)
          // )
        }
      })
  }

  return <SignUpForm onSubmit={onSubmit} />
}

export default SignUp
