import React from 'react'

export const Card = (props) => (
  <div className={`max-w-md rounded overflow-hidden shadow border border-grey-light bg-white ${props.className ? props.className : ''}`}>
    {props.children}
  </div>
)

export const PaddedCard = (props) => (
  <Card className={`p-8 ${props.className ? props.className : ''}`}>
    {props.children}
  </Card>
)
