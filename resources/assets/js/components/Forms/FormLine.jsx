import React from 'react'

import { PasswordInput, TextArea, TextInput } from 'components'

export const FormLine = ({
  name,
  children,
  labelText,
  className = '',
  form: { touched, errors } = {}
}) => (
  <div className={`block py-4 ${className}`}>
    <label className="block text-grey-dark text-md" htmlFor={name}>
      <span className="inline-block mb-2">{labelText}</span>
      {children}
      {touched && errors[name] && (
        <div className="text-red text-sm mt-2">{errors[name]}</div>
      )}
    </label>
  </div>
)

export const TextFormLine = ({ field, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <TextInput {...field} />
  </FormLine>
)

export const PasswordFormLine = ({ field, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <PasswordInput {...field} />
  </FormLine>
)

export const TextAreaFormLine = ({ field, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <TextArea {...field} />
  </FormLine>
)
