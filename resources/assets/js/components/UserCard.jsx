import React from 'react'
import { connect } from 'react-redux'

import defaultProfileImage from 'default-profile-picture.jpeg'

export const UserCardComponent = (props) => {
    const { user, colorTheme, className } = props
    const { firstName, lastName, profileImage } = user

    const fullName = lastName !== undefined ? [firstName, lastName].join(" ") : firstName

    const themeTextClass = colorTheme == 'dark' ? 'text-blue-darker' : 'text-white'

    const UserMenuItem = (props) => (
      <li className={`inline-block ${props.className}`}>
        <a className={`${themeTextClass}`} href={props.to}>{props.children}</a>
      </li>
    )

    return (
      <div className={`flex items-center ${className} ${themeTextClass}`}>
        <img
          src={profileImage !== undefined ? profileImage : defaultProfileImage }
          className="w-10 h-10 rounded-full mr-4"
          alt=""/>

        <div className="text-sm">
          <div className="mb-1">{fullName}</div>
          <ul className="list-reset text-sm">
            <UserMenuItem className="mr-4" to="/logout">Logout</UserMenuItem>
            <UserMenuItem to="/settings">Settings</UserMenuItem>
          </ul>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export const UserCard = connect(
  mapStateToProps,
  null
)(UserCardComponent)
