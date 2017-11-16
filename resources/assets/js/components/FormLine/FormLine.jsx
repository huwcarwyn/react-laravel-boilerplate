import React from 'react'
import { Field } from 'redux-form'

const FormLine = (props) => {
  const {labelText, name, type, input, meta: {touched, error}} = props

  return (
    <div className="form-line">
      <label htmlFor={name}>{labelText}</label>
      {touched && (error && <div className="form-error">{error}</div>)}
      <input className="form-input" {...input} type={type} />
    </div>
  )
}

export default FormLine
