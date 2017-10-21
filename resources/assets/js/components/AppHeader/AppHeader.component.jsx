import React from 'react'

import { Logo, UserCard, AppWidthConstraint } from 'components'

import './AppHeader.scss'

const AppHeader = (props) => {
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

export default AppHeader
