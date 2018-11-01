import React from 'react'

const baseButtonStyles = 'bg-transparent font-semibold border hover:text-white hover:border-transparent'

export const NeutralButton = ({ className = '', ...buttonProps }) => (
  <button
    {...buttonProps}
    className={`${baseButtonStyles} hover:bg-blue text-blue-dark py-2 px-4 border-blue  ${className}`}>
    {props.children}
  </button>
)

export const NegativeButton = ({ className = '', ...buttonProps }) => (
  <button
    {...buttonProps}
    className={`${baseButtonStyles} hover:bg-red text-red-dark py-2 px-4 border-red ${className}`}>
    {props.children}
  </button>
)

export const PositiveButton = ({ className = '', ...buttonProps }) => (
  <button
    {...buttonProps}
    className={`${baseButtonStyles} hover:bg-green text-green-dark py-2 px-4 border-green ${className}`}>
    {props.children}
  </button>
)
