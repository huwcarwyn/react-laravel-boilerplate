import React from 'react'

import './Card.scss'

const Card = (props) => {
  return(<div styleName="card">
    {props.children}
  </div>)
}

export default Card
