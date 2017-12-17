import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SubmissionError } from 'redux-form';

import { PaddedCard } from 'components'

import LogInForm from './components/LogInForm'

export const LogIn = (props) => {
  const { attemptLogin } = props

  return (
    <div className="max-w-md mt-8 mx-auto">
      <h1 className="text-center text-grey-darkest mb-4">Log In</h1>
      <PaddedCard>
        <LogInForm onSubmit={attemptLogin} />
      </PaddedCard>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: (loginDetails) => {
    axios.post('/api/login', loginDetails)
      .then((response) => {
        dispatch(push('/overview'))
      })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(LogIn)
