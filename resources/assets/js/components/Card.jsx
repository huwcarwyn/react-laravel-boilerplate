import React from 'react'

export const Card = (props) => {
  const { title, children } = props

  return (
  <div className={`max-w-md rounded overflow-hidden shadow border border-grey-light bg-white text-grey-darker ${props.className ? props.className : ''}`}>
    {title && (<div className="text-lg font-bold py-3 px-4 border-b border-grey-light">{title}</div>)}
    {children}
  </div>)
}

export const CardContent = (props) => (
  <div className="p-4">
    {props.children}
  </div>
)

export const CardListItem = (props) => (
  <div className="p-4 border-b border-grey-light">
    {props.children}
  </div>
)
