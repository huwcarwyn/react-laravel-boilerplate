import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { DashboardLayout } from 'layouts/Dashboard'
import {
  LogIn,
  SignUp,
  UserOverview,
  PasswordReset,
  ForgotPassword,
  NotFound
} from 'pages'
import { AuthGuard, FlashMessageRoot } from 'components'

import { store, browserHistory } from './create-store'

// Higher order component for rendering a page with the dashboard layout
const withDashboard = (ContentComponent) => {
  return (props) => (
    <AuthGuard>
      <DashboardLayout>
        <ContentComponent {...props} />
      </DashboardLayout>
    </AuthGuard>
  )
}

export const App = (props) => (
  <Provider store={store}>
    <div>
      <FlashMessageRoot />
      <ConnectedRouter history={browserHistory}>
        <Switch>
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/forgot-password' component={ForgotPassword} />
          <Route exact path='/reset-password/:resetToken' component={PasswordReset} />
          {/* Dashboard routes */}
          <Route exact path='/overview' component={withDashboard(UserOverview)} />
          {/* 404 route */}
          <Route path="*" exact={true} component={NotFound}/>
        </Switch>
      </ConnectedRouter>
    </div>
  </Provider>
)
