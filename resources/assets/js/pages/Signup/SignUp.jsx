import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SubmissionError } from 'redux-form'

import { Card, CardContent } from 'components'

import SignUpForm from './components/SignUpForm'

export const SignUpComponent = (props) => {
  const { submitSignup } = props

  return (
    <Card className="mt-20 max-w-md mx-auto">
      <CardContent>
        <h1 className="text-center text-grey-darkest mb-4">Sign Up</h1>
        <SignUpForm onSubmit={submitSignup} />
      </CardContent>
    </Card>
  )
}

const parseValidationErrorResponse = (response) => {
	let errors = {}

	if (response.email && response.email.Unique) {
		errors.email = 'This email already exists, please try a different email.'
	}

	return errors
}

const mapDispatchToProps = (dispatch) => ({
  submitSignup: (signUpData) => {
    return axios.post('/api/signup', signUpData)
      .then((response) => {
      	if (response.status === 200) {
      		// Successful signup, move on to dashboard/overview.
        	dispatch(push('/overview'))
      	}
      })
      .catch((error) => {
				if (error.response.status === 422) {
					// Invalid data was supplied to the API, show validation errors
					throw new SubmissionError(parseValidationErrorResponse(error.response.data.messages))
				}
      })
  }
})

export const SignUp = connect(
    null,
    mapDispatchToProps
)(SignUpComponent)
