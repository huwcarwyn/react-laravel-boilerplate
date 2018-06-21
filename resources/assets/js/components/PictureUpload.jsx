import React from 'react'

import defaultProfileImage from 'default-profile-picture.jpeg'

export const PictureUpload = (props) => {
  const { input: { onChange, value }, className } = props

  const currentImage = value || defaultProfileImage

  return (
    <div className={`${className || ''} text-center`}>
      <img className="w-48 rounded-full mb-4" src={currentImage} alt="user avatar picture"/>
      <span class="block text-grey text-sm">Drag or click to update your profile picture</span>
    </div>
  )
}
