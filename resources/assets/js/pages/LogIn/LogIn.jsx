import React from 'react'
import { connect } from 'react-redux'

import { history } from 'utils/history'
import { logIn } from 'store/action-creators/session'

import LogInForm from './LogInForm'

export const LogInComponent = props => {
  const { attemptLogin } = props

  return <LogInForm onSubmit={attemptLogin} />
}

const parseValidationFromResponse = response => {
  let errors = {}
  if (
    response.errors === true &&
    response.message === 'Incorrect login details'
  ) {
    errors.email = 'Incorrect login details'
  }

  return errors
}

export default connect(null, dispatch => ({
  attemptLogin: async (loginDetails, { setErrors }) => {
    try {
      await dispatch(logIn(loginDetails))
      history.push('/')
    } catch (error) {
      setErrors(parseValidationFromResponse(error.response.data))
    }
  }
}))(LogInComponent)
