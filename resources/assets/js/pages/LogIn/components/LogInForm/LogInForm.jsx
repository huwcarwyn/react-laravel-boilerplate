import React from 'react'
import { reduxForm, Field } from 'redux-form'

import './LogInForm.scss'

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form styleName="log-in-form" onSubmit={handleSubmit}>
      <div className="form-line">
        <label htmlFor="email">Email</label>
        <Field className="form-input" component="input" name="email" />
      </div>
      <div className="form-line">
        <label htmlFor="password">Password</label>
        <Field className="form-input" component="input" type="password" name="password" />
      </div>
      <div className="form-line">
        <button className="btn btn-blue" styleName="submit-button" type="submit">Log In</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)
