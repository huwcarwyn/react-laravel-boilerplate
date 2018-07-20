import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { logIn } from 'store/action-creators/session'

import LogInForm from './LogInForm'

export const LogInComponent = (props) => {
  const { attemptLogin } = props

  return (
    <LogInForm onSubmit={attemptLogin} />
  )
}

const parseValidationFromResponse = (response) => {
  let errors = {}
  if (response.errors === true && response.message === 'Incorrect login details') {
    errors.email = 'Incorrect login details'
  }

  return errors
}

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: (loginDetails) => {
    return dispatch(logIn(loginDetails))
      .then((response) => {
        dispatch(push('/'))
      })
      .catch((error) => {
        throw new SubmissionError(parseValidationFromResponse(error.response.data))
      })
  }
})

export const LogIn = connect(
  null,
  mapDispatchToProps
)(LogInComponent)
