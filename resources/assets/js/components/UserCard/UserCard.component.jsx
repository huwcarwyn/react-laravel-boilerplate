import React from 'react'

import defaultProfileImage from 'default-profile-picture.jpeg'
import './UserCard.scss'

const UserCard = (props) => {
    const { firstName, lastName, profileImage, colorTheme } = props

    const fullName = lastName !== undefined ? [firstName, lastName].join(" ") : firstName

    const theme = colorTheme == 'dark' ? 'dark' : 'light'

    return (
      <div styleName={`user-card ${theme}`}>
        <div styleName="profile-picture">
          <img
            styleName="profile-picture-image"
            src={profileImage !== undefined ? profileImage : defaultProfileImage }
            alt=""/>
        </div>

        <div styleName="user-info">
          <div styleName="full-name">{fullName}</div>
          <ul styleName="user-actions">
            <li><a href="/logout">Logout</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </div>
      </div>
    )
}

export default UserCard
