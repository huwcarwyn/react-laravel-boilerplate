import React from 'react'

import { Card } from 'components'

import LogInForm from './components/LogInForm/LogInForm.component'
import './LogIn.scss'

const LogIn = (props) => (
  <div styleName="login">
    <h1 styleName="page-header">Log In</h1>
    <Card>
      <LogInForm />
    </Card>
  </div>
)

export default LogIn
