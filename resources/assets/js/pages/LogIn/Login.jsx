import React from 'react'
import { connect } from 'react-redux'

import { Card } from 'components'

import LogInForm from './components/LogInForm/LogInForm'
import './LogIn.scss'

export const LogIn = (props) => (
  <div styleName="login">
    <h1 styleName="page-header">Log In</h1>
    <Card>
      <LogInForm />
    </Card>
  </div>
)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInComponent)
