import React from 'react'

import { AppHeader } from 'components'
import { userSessionActionCreators } from 'store/action-creators'

export class DashboardLayout extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
