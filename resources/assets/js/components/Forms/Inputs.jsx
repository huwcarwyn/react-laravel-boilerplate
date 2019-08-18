import React from 'react'

const textInputClasses =
  'block w-full border border-grey-light bg-grey-lightest rounded'

export const TextInput = ({ className = '', input, ...props }) => (
  <input
    className={`${textInputClasses} h-12 px-2 ${className}`}
    {...input}
    {...props}
    type="text"
  />
)

export const PasswordInput = ({ className = '', input, ...props }) => (
  <input
    className={`${textInputClasses} h-12 px-2 ${className}`}
    {...input}
    {...props}
    type="password"
  />
)

export const TextArea = ({ className = '', input, ...props }) => (
  <textarea
    className={`${textInputClasses} h-48 p-2 ${className}`}
    {...input}
    {...props}
  />
)
