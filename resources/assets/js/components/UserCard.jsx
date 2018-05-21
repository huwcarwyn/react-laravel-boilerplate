import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

import { currentUserSelector } from 'store/selectors/session'
import defaultProfileImage from 'default-profile-picture.jpeg'

export const UserCardComponent = (props) => {
  const { user, colorTheme, className, logOut } = props
  const { first_name: firstName, last_name: lastName, profileImage } = user

  const fullName = lastName !== undefined ? [firstName, lastName].join(' ') : firstName

  const themeTextClass = colorTheme === 'dark' ? 'text-blue-darker' : 'text-white'

  return (
    <div className={`flex items-center ${className} ${themeTextClass}`}>
      <img
        src={profileImage !== undefined ? profileImage : defaultProfileImage }
        className="w-10 h-10 rounded-full mr-4" />

      <div className="text-sm">
        <div className="mb-1">{fullName}</div>
        <ul className="list-reset text-sm">
          <li className="inline-block mr-4">
            <span className={`${themeTextClass} underline cursor-pointer`} onClick={logOut}>Logout</span>
          </li>
          <li className="inline-block">
            <Link className={`${themeTextClass}`} to="/settings/user">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: currentUserSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    axios.get('/api/logout')
      .then((response) => {
        dispatch(push('/login'))
      })
  }
})

export const UserCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCardComponent)
