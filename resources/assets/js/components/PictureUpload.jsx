import React from 'react'

import { DragOverlay } from 'components'

import defaultProfileImage from 'default-profile-picture.jpeg'

export class PictureUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovering: false
    }

    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover() {
    this.setState({isHovering: !this.state.isHovering})
  }

  render() {
    const { input: { onChange, value }, className } = this.props
    const { isHovering } = this.state

    const currentImage = value || defaultProfileImage
    console.log(isHovering)
    return (
      <div className={`${className || ''} relative text-center`}>
        <DragOverlay
          onDragEnter={this.toggleHover}
          onDragLeave={this.toggleHover}>
          <div className="w-48 rounded-full mb-4 relative overflow-hidden pointer-events-none">
            { isHovering && <div className="opacity-25 bg-black absolute pin"></div> }
            <img src={currentImage} className="w-full" alt="user avatar picture" />
          </div>
          <span className="block text-grey text-sm">Drag or click to update your profile picture</span>
        </DragOverlay>
      </div>
    )
  }
}
