import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'

import { Card } from 'components'

import SignUpForm from './components/SignUpForm/SignUpForm'
import './SignUp.scss'

export const SignUp = (props) => {
  const { submitSignup } = props

  return (
    <div styleName="sign-up">
      <h1 styleName="page-header">Sign Up</h1>
      <Card>
        <SignUpForm onSubmit={submitSignup} />
      </Card>
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
