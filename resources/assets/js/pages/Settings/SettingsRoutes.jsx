import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'

import { Card, CardContent } from 'components'
import { linkStyle } from 'constants/styles'

import { UserSettings } from './UserSettings'
import { AppSettingsForm } from './Forms/AppSettingsForm'
import { BillingSettingsForm } from './Forms/BillingSettingsForm'

const CardLink = ({ to, className = '', children }) => {
  return (
    <NavLink
      to={to}
      activeClassName="bg-blue-lightest"
      className={`block border-b border-grey-light p-4 ${linkStyle} ${className}`}
    >
      {children}
    </NavLink>
  )
}

export class SettingsRoutesComponent extends Component {
  render() {
    const {
      match: { url: currentUrl }
    } = this.props

    return (
      <Fragment>
        <h2 className="mb-4">Settings</h2>
        <div className="flex items-start">
          <Card className="w-64">
            <CardLink to={`${currentUrl}/user`}>Account</CardLink>
            <CardLink to={`${currentUrl}/app`}>Application</CardLink>
            <CardLink to={`${currentUrl}/billing`}>Billing</CardLink>
          </Card>
          <Card className="flex-grow ml-4">
            <CardContent>
              <Switch>
                <Route
                  exact
                  path={`${currentUrl}/user`}
                  component={UserSettings}
                />
                <Route
                  exact
                  path={`${currentUrl}/app`}
                  component={AppSettingsForm}
                />
                <Route
                  exact
                  path={`${currentUrl}/billing`}
                  component={BillingSettingsForm}
                />
              </Switch>
            </CardContent>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default connect()(SettingsRoutesComponent)
