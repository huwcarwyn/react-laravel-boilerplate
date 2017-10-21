import React from 'react'
import { connect } from 'react-redux'

import { AppHeader } from 'components'
import { userSessionActionCreators } from 'store/action-creators'

class DashboardLayout extends React.Component {
  componentDidMount() {
    this.props.getCurrentUserInfo()
  }

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

const mapDispatchToProps = (dispatch) => ({
  getCurrentUserInfo: () => {
    dispatch(userSessionActionCreators.getCurrentUserInfo())
  },
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(DashboardLayout)
