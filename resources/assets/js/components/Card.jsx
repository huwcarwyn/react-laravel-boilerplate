import React from 'react'

export const Card = ({ title, children, className = '' }) => (
  <div className={`rounded overflow-hidden shadow border border-grey-light bg-white text-grey-darker ${className}`}>
    {title && (<div className="text-lg font-bold py-3 px-4 border-b border-grey-light">{title}</div>)}
    {children}
  </div>
)

export const CardContent = ({className = '', children}) => (
  <div className={`p-8 ${className}`}>
    {children}
  </div>
)

export const CardListItem = ({children}) => (
  <div className="p-4 border-b border-grey-light">
    {children}
  </div>
)
