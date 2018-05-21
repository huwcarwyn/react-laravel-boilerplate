import React from 'react'

import { AppHeader } from 'components'

export const DashboardLayout = (props) => (
  <div>
    <AppHeader />
    <div className='max-w-2xl mx-auto mt-10 px-4'>
      {props.children}
    </div>
  </div>
)
