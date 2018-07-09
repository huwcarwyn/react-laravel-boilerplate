import React from 'react'

import { DragOverlay } from 'components'

import './PictureUpload.scss'
import defaultProfileImage from 'default-profile-picture.jpeg'

export class PictureUpload extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isHovering: false
    }

    this.handleDrop = this.handleDrop.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }

  async handleDrop (e) {
    e.preventDefault()

    const { uploadHandler } = this.props

    if (uploadHandler) {
      let fileData = new FormData()
      fileData.append('avatar', e.dataTransfer.items[0].getAsFile())
      await uploadHandler(fileData)
    }

    this.setState({ isHovering: false })
  }

  toggleHover () {
    this.setState({isHovering: !this.state.isHovering})

    return false
  }

  render () {
    const { input: { value }, className } = this.props
    const { isHovering } = this.state

    const currentImage = value || defaultProfileImage

    return (
      <div className={`${className || ''} relative text-center`}>
        <DragOverlay
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={this.toggleHover}
          onDragLeave={this.toggleHover}
          onDrop={this.handleDrop}>
          <div className="w-48 rounded-full mb-4 mx-auto relative overflow-hidden pointer-events-none">
            { isHovering && <div styleName="picture-overlay" className="bg-black absolute pin"></div> }
            <img src={currentImage} className="block w-64" alt="user avatar picture" />
          </div>
          <span className="block text-grey text-sm">Drag or click to update your profile picture</span>
        </DragOverlay>
      </div>
    )
  }
}
