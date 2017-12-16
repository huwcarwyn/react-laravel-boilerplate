import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { Card } from 'components'

import LogInForm from './components/LogInForm/LogInForm'

export const LogIn = (props) => {
  const { attemptLogin } = props

  return (
    <div className="max-w-md mt-8 mx-auto">
      <h1 className="text-center text-grey-darkest mb-4">Log In</h1>
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
