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

    this.fileInputRef = React.createRef()

    this.handleDrop = this.handleDrop.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
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

  async handleFileUpload (e) {
    e.preventDefault()

    if (!e.target.files[0]) {
      return false
    }

    const { uploadHandler } = this.props

    let fileData = new FormData()
    fileData.append('avatar', e.target.files[0])
    await uploadHandler(fileData)
  }

  toggleHover () {
    this.setState({isHovering: !this.state.isHovering})

    return false
  }

  render () {
    const { input: { name, value }, className = '' } = this.props
    const { isHovering } = this.state

    const currentImage = value || defaultProfileImage

    return (
      <label
        htmlFor={name}
        className={`cursor-pointer relative text-center ${className} `}>
        <DragOverlay
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={this.toggleHover}
          onDragLeave={this.toggleHover}
          onDrop={this.handleDrop}>
          <div className="w-48 h-48 rounded-full mb-4 mx-auto relative overflow-hidden pointer-events-none">
            { isHovering && <div styleName="picture-overlay" className="bg-black absolute pin"></div> }
            <img src={currentImage} styleName="uploaded-picture" className="block" alt="user avatar picture" />
          </div>
          <span className="block text-grey text-sm">Drag or click to update your profile picture</span>
        </DragOverlay>
        <input
          type="file"
          id={name}
          name={name}
          className="hidden"
          onChange={this.handleFileUpload} />
      </label>
    )
  }
}
