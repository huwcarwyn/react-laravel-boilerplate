import React from 'react'

const textInputClasses = 'block w-full h-12 px-2 border border-grey-light bg-grey-lightest rounded'

export const TextInput = (props) => (
  <input className={textInputClasses} {...props} type="text" />
)

export const PasswordInput = (props) => (
  <input className={textInputClasses} {...props} type="password" />
)
