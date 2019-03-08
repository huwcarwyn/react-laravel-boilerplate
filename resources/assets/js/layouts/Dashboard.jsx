import React from 'react'

import { AppHeader, AppFooter } from 'components'

export const DashboardLayout = props => (
  <div>
    <AppHeader />
    <div className="max-w-2xl mx-auto mt-10 px-4">{props.children}</div>
    <AppFooter />
  </div>
)
