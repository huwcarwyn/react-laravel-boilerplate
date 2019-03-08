import React from 'react'

const textInputClasses =
  'block w-full border border-grey-light bg-grey-lightest rounded'

export const TextInput = props => (
  <input className={`${textInputClasses} h-12 px-2`} {...props} type="text" />
)

export const PasswordInput = props => (
  <input
    className={`${textInputClasses} h-12 px-2`}
    {...props}
    type="password"
  />
)

export const TextArea = props => (
  <textarea className={`${textInputClasses} h-48 p-2`} {...props} />
)
