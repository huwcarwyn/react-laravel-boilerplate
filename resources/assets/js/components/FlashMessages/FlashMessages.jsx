import React from 'react'

export const BaseFlashMessage = ({ className = '', handleDeleteClick, children }) => (
  <div className={`fixed w-screen flex text-white slide-down p-2 ${className}`}>
    {children}
    <span className="ml-auto" onClick={handleDeleteClick}>
      X
    </span>
  </div>
)

export const NeutralFlashMessage = ({ message, ...wrapperProps }) => (
  <BaseFlashMessage {...wrapperProps} className="bg-blue">
    { message }
  </BaseFlashMessage>
)

export const NegativeFlashMessage = ({ message, ...wrapperProps }) => (
  <BaseFlashMessage {...wrapperProps} className="bg-red">
    { message }
  </BaseFlashMessage>
)

export const WarningFlashMessage = ({ message, ...wrapperProps }) => (
  <BaseFlashMessage {...wrapperProps} className="bg-yellow-dark">
    { message }
  </BaseFlashMessage>
)

export const PositiveFlashMessage = ({ message, ...wrapperProps }) => (
  <BaseFlashMessage {...wrapperProps} className="bg-green">
    { message }
  </BaseFlashMessage>
)
