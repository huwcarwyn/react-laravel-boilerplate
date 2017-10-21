import React from 'react'

import { Card } from 'components'

import SignUpForm from './components/SignUpForm/SignUpForm.component'
import './SignUp.scss'

const SignUp = (props) => (
  <div styleName="sign-up">
    <h1 styleName="page-header">Sign Up</h1>
    <Card>
      <SignUpForm onSubmit={props.submitSignup} />
    </Card>
  </div>
)

export default SignUp
