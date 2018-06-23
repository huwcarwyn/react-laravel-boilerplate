import React, { Component } from 'react'

export class DragOverlay extends Component {
  constructor(props) {
    super(props)

    this.eventNames = [
      'onDragEnter',
      'onDragLeave',
      'onDragOver',
      'onDrop'
    ]

    this.eventHandlersFromProps = this.eventHandlersFromProps.bind(this)
  }

  eventHandlersFromProps(props) {
    return this.eventNames.reduce((acc, eventName) => {
      if(props[eventName]) {
        acc[eventName] = props[eventName]
      }

      return acc
    }, {})
  }

  render() {
    const { children } = this.props
    return (
      <div {...this.eventHandlersFromProps(this.props)}>
        { children }
      </div>
    )
  }
}
