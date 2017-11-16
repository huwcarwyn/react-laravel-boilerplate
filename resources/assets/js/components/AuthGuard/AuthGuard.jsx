import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export class AuthGuard extends React.Component {
  componentDidMount() {
    const { redirectToSignup, isLoggedIn } = this.props

    if(!isLoggedIn) {
      redirectToSignup()
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.currentUser.id !== null,
})

const mapDispatchToProps = (dispatch) => ({
  redirectToSignup: () => {
    dispatch(push('/signup'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGuard)
