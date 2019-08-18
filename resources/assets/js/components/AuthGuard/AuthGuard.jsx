import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { getCurrentUserInfo } from 'store/action-creators/session'

const AuthGuardComponent = ({ currentUserId, children, authOrRedirect }) => {
  const [loading, setLoading] = useState(true)

  const attemptAuth = async () => {
    if (!currentUserId) {
      await authOrRedirect()
    }

    setLoading(false)
  }

  useEffect(() => {
    attemptAuth()
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen items-center">
        <div className="w-screen text-3xl text-center text-grey">
          Loading...
        </div>
      </div>
    )
  }

  return <Fragment>{children}</Fragment>
}

export const AuthGuard = connect(
  state => ({
    currentUserId: state.session.currentUser
  }),
  dispatch => ({
    authOrRedirect: () => {
      return dispatch(getCurrentUserInfo()).catch(() => {
        dispatch(replace('/login'))
      })
    }
  })
)(AuthGuardComponent)
