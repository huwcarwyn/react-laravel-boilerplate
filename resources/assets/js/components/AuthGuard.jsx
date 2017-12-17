import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { userSessionActionCreators } from 'store/action-creators'

export class AuthGuardComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoadingUser: true,
    }
  }

  componentWillMount() {
    const { authOrRedirect } = this.props

    authOrRedirect()
      .then((response) => {
        this.setState({
          isLoadingUser: false,
        })
      })
  }

  render() {
    const { children } = this.props
    const { isLoadingUser } = this.state

    if (isLoadingUser) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>{children}</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  authOrRedirect: () => {
    return dispatch(userSessionActionCreators.getCurrentUserInfo())
      .catch(() => {
        dispatch(replace('login'))
      })
  },
})

export const AuthGuard = connect(
  null,
  mapDispatchToProps
)(AuthGuardComponent)
