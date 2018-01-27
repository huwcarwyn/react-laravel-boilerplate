import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'

import { PaddedCard } from 'components'

import SignUpForm from './components/SignUpForm'

export const SignUpComponent = (props) => {
  const { submitSignup } = props

  return (
    <PaddedCard className="mt-20 mx-auto">
    	<h1 className="text-center text-grey-darkest mb-4">Sign Up</h1>
      <SignUpForm onSubmit={submitSignup} />
    </PaddedCard>
  )
}

const mapDispatchToProps = (dispatch) => ({
  submitSignup: (signUpData) => {
    axios.post('/api/signup', signUpData)
      .then((response) => {
        dispatch(push('/overview'))
      })
  }
})

export const SignUp = connect(
    null,
    mapDispatchToProps
)(SignUpComponent)
