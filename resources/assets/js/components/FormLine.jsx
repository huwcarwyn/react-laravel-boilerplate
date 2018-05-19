import React from 'react'

import { TextInput } from 'components'

export const FormLine = (props) => {
  const {labelText, name, children, meta: {touched, error}} = props

  return (
    <div className="block py-4">
      <label className="block pb-2 text-grey-darker text-md" htmlFor={name}>{labelText}</label>
      {touched && (error && <div className="text-red text-sm">{error}</div>)}
      {children}
    </div>
  )
}

export const TextFormLine = (props) => (
  <FormLine {...props}>
    <TextInput {...props.input} />
  </FormLine>
)
