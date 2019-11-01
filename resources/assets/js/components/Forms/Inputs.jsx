import React, { useState } from 'react'

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

export const Select = ({
  className = '',
  placeholder = 'Please select a value',
  input: { value, onChange },
  options,
  renderItem,
  ...props
}) => {
  const [opened, setOpened] = useState(false)

  const selectedOption = options.find(option => option.value === value)

  return (
    <div
      onClick={() => setOpened(!opened)}
      className={`border relative w-48 border-grey rounded-md inline-block ${className}`}
      {...props}
    >
      <div className="p-2">
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      <ul
        style={{ top: '33px' }}
        className={`list-reset absolute bg-white w-full z-40 border border-grey ${
          opened ? 'block' : 'hidden'
        }`}
      >
        {options.map(option =>
          renderItem ? (
            renderItem(option)
          ) : (
            <li
              className="p-2 hover:bg-grey-lighter"
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </li>
          )
        )}
      </ul>
    </div>
  )
}
