import React, { useEffect, useState } from 'react'

const dragEvents = ['onDragEnter', 'onDragLeave', 'onDragOver', 'onDrop']

export const DragOverlay = ({ children, ...props }) => {
  const [eventHandlers, setEventHandlers] = useState({})

  useEffect(() => {
    setEventHandlers(dragEvents.reduce((acc, eventName) => {
      if (props[eventName]) {
        acc[eventName] = props[eventName]
      }

      return acc
    }, {})
    )
  }, [])

  return <div {...eventHandlers}>{children}</div>
}
