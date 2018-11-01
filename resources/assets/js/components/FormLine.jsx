import React from 'react'

import { PasswordInput, TextArea, TextInput } from 'components'

export const FormLine = ({ labelText, name, children, className = '', meta: { touched, error } }) => (
  <div className={`block py-4 ${className}`}>
    <label className="block text-grey-dark text-md" htmlFor={name}>
      <span className="inline-block pb-2">{labelText}</span>
      {touched && (error && <div className="text-red text-sm">{error}</div>)}
      {children}
    </label>
  </div>
)

export const TextFormLine = ({ input, ...wrapperProps }) => (
  <FormLine {...wrapperProps}>
    <TextInput {...input} />
  </FormLine>
)

export const PasswordFormLine = ({ input, ...wrapperProps }) => (
  <FormLine {...wrapperProps}>
    <PasswordInput {...input} />
  </FormLine>
)

export const TextAreaFormLine = ({ input, ...wrapperProps }) => (
  <FormLine {...wrapperProps}>
    <TextArea {...input} />
  </FormLine>
)
