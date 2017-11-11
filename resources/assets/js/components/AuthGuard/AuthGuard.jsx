import React from 'react'
import { connect } from 'react-redux'

export class AuthGuard extends React.Component {
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.currentUser.id !== null,
})

export default connect(
  mapStateToProps
)(AuthGuard)
