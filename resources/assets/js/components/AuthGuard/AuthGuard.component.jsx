import React from 'react'
import { withRouter } from 'react-router-dom'

class AuthGuard extends React.Component {
  componentDidMount() {
    const { history, isLoggedIn } = this.props

    if(!isLoggedIn) {
      history.push('/signup')
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default withRouter(AuthGuard)
