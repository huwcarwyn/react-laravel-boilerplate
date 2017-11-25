import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { userSessionActionCreators } from 'store/action-creators'

export class AuthGuard extends React.Component {
  componentDidMount() {
    const { authOrRedirect } = this.props

    authOrRedirect()
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  authOrRedirect: () => {
    dispatch(userSessionActionCreators.getCurrentUserInfo())
      .catch(() => {
        dispatch(replace('login'))
      })
  },
})

export default connect(
  null,
  mapDispatchToProps
)(AuthGuard)
