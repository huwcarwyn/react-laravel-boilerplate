import { connect } from 'react-redux'

import AppHeader from './AppHeader.component'

const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(
  mapStateToProps
)(AppHeader)
