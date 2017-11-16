import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { Card } from 'components'

import LogInForm from './components/LogInForm/LogInForm'
import './LogIn.scss'

export const LogIn = (props) => {
  const { attemptLogin } = props

  return (
    <div styleName="login">
      <h1 styleName="page-header">Log In</h1>
      <Card>
        <LogInForm onSumbit={attemptLogin} />
      </Card>
    </div>
  )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: (loginDetails) => {
    axios.post('/api/login', loginDetails)
      .then((response) => {
        
      })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)
