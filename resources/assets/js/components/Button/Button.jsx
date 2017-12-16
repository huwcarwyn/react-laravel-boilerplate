import React from 'react'

const NeutralButton = (props) => (
  <button
    type={props.type}
    className={`bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent ${props.className}`}>
    {props.children}
  </button>
)

const NegativeButton = (props) => (
  <button
    type={props.type}
    className={`bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent ${props.className}`}>
    {props.children}
  </button>
)

const PositiveButton = (props) => (
  <button
    type={props.type}
    className={`bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent ${props.className}`}>
    {props.children}
  </button>
)

export { NeutralButton, NegativeButton, PositiveButton }
