import React from 'react'

import { AppHeader } from 'components'

export const DashboardLayout = (props) => (
  <div>
    <AppHeader />
    <div>
      {props.main}
    </div>
  </div>
)
