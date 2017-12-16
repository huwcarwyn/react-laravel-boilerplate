import React from 'react'
import { connect } from 'react-redux'

import { Logo, UserCard, AppWidthConstraint } from 'components'

export const AppHeader = (props) => {
  const { user } = props

  return (
    <div className="bg-blue-darker">
      <div className="max-w-2xl flex items-center bg-blue-darker py-2 px-4 mx-auto">
        <Logo />

        <UserCard className="ml-auto" colorTheme="light" />
      </div>
    </div>
  )
}
