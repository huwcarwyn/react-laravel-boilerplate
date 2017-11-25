import React from 'react'
import { connect } from 'react-redux'

import { AppHeader } from 'components'
import { userSessionActionCreators } from 'store/action-creators'

class DashboardLayout extends React.Component {
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

export default connect(
  null,
  null
)(DashboardLayout)
