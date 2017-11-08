import { connect } from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'

import SignUp from './SignUp.component'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  submitSignup: (signUpData) => {
    axios.post('/api/signup', signUpData)
      .then((response) => {
        dispatch(push('/overview'))
      })
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
