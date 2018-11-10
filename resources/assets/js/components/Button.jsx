import React from 'react'

const baseButtonStyles = 'bg-transparent font-semibold border hover:text-white hover:border-transparent'

export const NeutralButton = ({ className = '', children, ...buttonProps }) => (
  <button
    {...buttonProps}
    className={`${baseButtonStyles} hover:bg-blue text-blue-dark py-2 px-4 border-blue  ${className}`}>
    {children}
  </button>
)

export const NegativeButton = ({ className = '', children, ...buttonProps }) => (
  <button
    {...buttonProps}
    className={`${baseButtonStyles} hover:bg-red text-red-dark py-2 px-4 border-red ${className}`}>
    {children}
  </button>
)

export const PositiveButton = ({ className = '', children, ...buttonProps }) => (
  <button
    {...buttonProps}
    className={`${baseButtonStyles} hover:bg-green text-green-dark py-2 px-4 border-green ${className}`}>
    {children}
  </button>
)
