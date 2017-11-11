import React from 'react'
import { connect } from 'react-redux'

import { Logo, UserCard, AppWidthConstraint } from 'components'

import './AppHeader.scss'

export const AppHeader = (props) => {
  const { user } = props

  return (
  <div styleName="app-header">
    <div styleName="app-header-inner">
      <Logo />
      <span styleName="user-profile">
        <UserCard firstName={user.firstName} lastName={user.lastName} colorTheme="light" />
      </span>
    </div>
  </div>)
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(
  mapStateToProps
)(AppHeader)
