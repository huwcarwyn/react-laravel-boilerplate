import React from 'react'
import { Field } from 'redux-form'

export const FormLine = (props) => {
  const {labelText, name, type, input, meta: {touched, error}} = props

  return (
    <div className="block py-4">
      <label className="block pb-2" htmlFor={name}>{labelText}</label>
      {touched && (error && <div className="text-red text-sm">{error}</div>)}
      <input className=" block w-full h-8 px-2 border border-grey" {...input} type={type} />
    </div>
  )
}
