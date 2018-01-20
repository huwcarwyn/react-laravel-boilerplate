import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'

import { PaddedCard } from 'components'

import { PasswordResetForm } from './PasswordResetForm'

export const PasswordResetComponent = (props) => {
  const { submitPasswordReset, match } = props
  console.log(match.params.resetToken)
  return (
    <PaddedCard className="mt-10 mx-auto">
      <h1 className="text-center text-grey-darkest mb-4">Recover Your Password</h1>
      <PasswordResetForm onSubmit={submitPasswordReset} />
    </PaddedCard>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitPasswordReset: (values) => {
    const { match } = ownProps
    axios.post('/api/reset-password', {
      ...values,
      token: match.params.resetToken,
    })
      .then((response) => {
        if (repsonse.status === 200) {

        } else if (response.status === 422) {
          throw new SubmissionError(response)
        }
      })
  },
})

export const PasswordReset = connect(
  null,
  mapDispatchToProps
)(PasswordResetComponent)
