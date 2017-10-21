import { connect } from 'react-redux'

import AuthGuard from './AuthGuard.component'

const mapStateToProps = (state) => ({
  isLoggedIn: state.currentUser.id !== null,
})

export default connect(
  mapStateToProps
)(AuthGuard)
