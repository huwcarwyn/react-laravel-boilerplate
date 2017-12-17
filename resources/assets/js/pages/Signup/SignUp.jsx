import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'

import { PaddedCard } from 'components'

import SignUpForm from './components/SignUpForm'

export const SignUp = (props) => {
  const { submitSignup } = props

  return (
    <div className="max-w-md mt-8 mx-auto">
      <h1 className="text-center text-grey-darkest mb-4">Sign Up</h1>
      <PaddedCard>
        <SignUpForm onSubmit={submitSignup} />
      </PaddedCard>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  submitSignup: (signUpData) => {
    axios.post('/api/signup', signUpData)
      .then((response) => {
        dispatch(push('/overview'))
      })
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
