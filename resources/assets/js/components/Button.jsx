import React from 'react'

const baseButtonStyles = 'bg-transparent font-semibold border hover:text-white hover:border-transparent'

export const NeutralButton = (props) => (
  <button
    {...props}
    className={`${baseButtonStyles} hover:bg-blue text-blue-dark py-2 px-4 border-blue  ${props.className || ''}`}>
    {props.children}
  </button>
)

export const NegativeButton = (props) => (
  <button
    {...props}
    className={`${baseButtonStyles} hover:bg-red text-red-dark py-2 px-4 border-red ${props.className || ''}`}>
    {props.children}
  </button>
)

export const PositiveButton = (props) => (
  <button
    {...props}
    className={`${baseButtonStyles} hover:bg-green text-green-dark py-2 px-4 border-green ${props.className || ''}`}>
    {props.children}
  </button>
)
