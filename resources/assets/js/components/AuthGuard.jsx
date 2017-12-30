import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { getCurrentUserInfo } from 'store/action-creators/userSession'

export class AuthGuardComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    const { authOrRedirect } = this.props

    authOrRedirect()
      .then((response) => {
      	if (response.status === 200) {
	        this.setState({
	          loading: false,
	        })
      	}
      })
  }

  render() {
    const { children } = this.props
    const { loading } = this.state

    if (loading) {
      return (
        <div className="flex h-screen items-center">
          <div className="w-screen text-3xl text-center text-grey">Loading...</div>
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
    return dispatch(getCurrentUserInfo())
      .catch(() => {
        dispatch(replace('/login'))
      })
  },
})

export const AuthGuard = connect(
  null,
  mapDispatchToProps
)(AuthGuardComponent)
