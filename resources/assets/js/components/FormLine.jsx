import React from 'react'

import { PasswordInput, TextArea, TextInput } from 'components'

export const FormLine = (props) => {
  const {labelText, name, children, className, meta: {touched, error}} = props

  return (
    <div className={`block py-4 ${className || ''}`}>
      <label className="block text-grey-dark text-md" htmlFor={name}>
        <span className="inline-block pb-2">{labelText}</span>
        {touched && (error && <div className="text-red text-sm">{error}</div>)}
        {children}
      </label>
    </div>
  )
}

export const TextFormLine = (props) => (
  <FormLine {...props}>
    <TextInput {...props.input} />
  </FormLine>
)

export const PasswordFormLine = (props) => (
  <FormLine {...props}>
    <PasswordInput {...props.input} />
  </FormLine>
)

export const TextAreaFormLine = (props) => (
  <FormLine {...props}>
    <TextArea {...props.input} />
  </FormLine>
)
