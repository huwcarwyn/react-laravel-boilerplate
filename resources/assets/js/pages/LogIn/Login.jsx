import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { Card, CardContent } from 'components'

import LogInForm from './components/LogInForm'

export const LogInComponent = (props) => {
  const { attemptLogin } = props

  return (
    <Card className="max-w-md mt-20 mx-auto">
      <CardContent>
        <h1 className="text-center text-grey-darkest mb-4">Log In</h1>
        <LogInForm onSubmit={attemptLogin} />
      </CardContent>
    </Card>
  )
}

const parseValidationFromResponse = (response) => {
  let errors = {}

  if (response.errors === true && response.messages === 'Incorrect login details') {
    errors.email = 'Incorrect login details'
  }

  return errors
}

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: (loginDetails) => {
    return axios.post('/api/login', loginDetails)
      .then((response) => {
        dispatch(push('/overview'))
      })
      .catch((error) => {
        if (error.response.status === 400) {
          throw new SubmissionError(parseValidationFromResponse(error.response.data.messages))
        }
      })
  }
})

export const LogIn = connect(
  null,
  mapDispatchToProps
)(LogInComponent)
