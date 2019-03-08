import React from 'react'

import { Logo, UserCard } from 'components'

export const AppHeader = props => (
  <div className="bg-blue-darker">
    <div className="max-w-2xl flex items-center bg-blue-darker py-2 px-4 mx-auto">
      <Logo />

      <UserCard className="ml-auto" colorTheme="light" />
    </div>
  </div>
)
