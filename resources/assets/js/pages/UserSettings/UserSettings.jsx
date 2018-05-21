import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { Card, CardContent, CardListItem } from 'components'
import { linkStyle } from 'constants/styles'

import { AccountSettingsForm } from './AccountSettingsForm'

const CardLink = ({to, className, children}) => {
  return (
    <CardListItem>
      <NavLink to={to} activeClassName="" className={`${linkStyle} ${className || ''}`}>
        { children }
      </NavLink>
    </CardListItem>
  )
}

export class UserSettingsComponent extends React.Component {
  render () {
    const { match: { url: currentUrl } } = this.props
    return (
      <Fragment>
        <h2 className="mb-4">Settings</h2>
        <div className="flex items-start">
          <Card className="w-64">
            <CardLink to={currentUrl}>Account</CardLink>
            <CardLink to={`${currentUrl}/app`}>Application</CardLink>
            <CardLink to={`${currentUrl}/billing`}>Billing</CardLink>
          </Card>
          <Card className="flex-grow ml-4">
            <CardContent>
              <AccountSettingsForm />
            </CardContent>
          </Card>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session

  return {
    user: state.entities.users[currentUser]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const UserSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettingsComponent)
