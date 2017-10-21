import { connect } from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'

import SignUp from './SignUp.component'

const mapStateToProps = () => ({

})

const mapDispatchToProps= (dispatch) => ({
  submitSignup: (signUpData) => {
    axios.post('/api/singup', signUpData)
      .then((response) => {
        console.log(response)
        dispatch(push('/overview'))
      })
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
