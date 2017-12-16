import React from 'react'

export const Card = (props) => {
  return(<div className="max-w-md rounded overflow-hidden shadow-md p-8 border border-grey-light">
    {props.children}
  </div>)
}
