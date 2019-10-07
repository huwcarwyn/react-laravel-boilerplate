import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { replace } from 'connected-react-router'
import { getCurrentUserInfo } from 'store/action-creators/session'

export const AuthGuardComponent = ({
  currentUserSlug,
  children,
  authOrRedirect
}) => {
  const [loading, setLoading] = useState(true)

  const attemptAuth = async () => {
    if (!currentUserSlug) {
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
    currentUserSlug: state.session.currentUser
  }),
  dispatch => ({
    authOrRedirect: () => {
      return dispatch(getCurrentUserInfo()).catch(() => {
        dispatch(replace('/login'))
      })
    }
  })
)(AuthGuardComponent)
