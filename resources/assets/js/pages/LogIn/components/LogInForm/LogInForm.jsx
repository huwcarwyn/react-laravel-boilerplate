import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormLine } from 'components'

import './LogInForm.scss'

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form styleName="log-in-form" onSubmit={handleSubmit}>
      <Field component={FormLine} type="text" name="email" labelText="Email" />
      <Field component={FormLine} type="password" name="password" labelText="Password" />
      <div className="form-line">
        <button className="btn btn-blue" styleName="submit-button" type="submit">Log In</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)
