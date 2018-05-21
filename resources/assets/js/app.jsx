import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { DashboardLayout, FormPageLayout } from 'layouts'

import {
  LogIn,
  SignUp,
  Overview,
  PasswordReset,
  ForgotPassword,
  NotFound,
  UserSettings
} from 'pages'
import { AuthGuard, FlashMessageRoot } from 'components'

import { store, browserHistory } from 'store/create-store'

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
          <Route exact path='/login' render={() => <FormPageLayout title="Log In"><LogIn /></FormPageLayout>} />
          <Route exact path='/signup' render={() => <FormPageLayout title="Sign Up"><SignUp /></FormPageLayout>} />
          <Route exact path='/forgot-password' render={() => <FormPageLayout title="Forgot Password"><ForgotPassword /></FormPageLayout>} />
          <Route exact path='/reset-password/:resetToken' render={() => <FormPageLayout title="Reset Password"><PasswordReset /></FormPageLayout>} />

          {/* Dashboard routes */}
          <Route exact path='/' component={withDashboard(Overview)} />
          <Route exact path='/settings' component={withDashboard(UserSettings)} />
          {/* 404 route */}
          <Route path="*" exact={true} component={NotFound}/>
        </Switch>
      </ConnectedRouter>
    </div>
  </Provider>
)
