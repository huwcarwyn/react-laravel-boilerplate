require("react-hot-loader/patch")

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
 } from 'pages'
import { AuthGuard } from 'components'

import { store, browserHistory } from './create-store'

export const App = (props) => (
  <Provider store={store}>
	  <ConnectedRouter history={browserHistory}>
	    <Switch>
	      <Route path='/login' component={LogIn} />
	      <Route path='/signup' component={SignUp} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/reset-password/:resetToken' component={PasswordReset} />
	      <AuthGuard>
	        <DashboardLayout>
	          <Route path='/overview' component={UserOverview} />
	        </DashboardLayout>
	      </AuthGuard>
	    </Switch>
	  </ConnectedRouter>
	</Provider>
)
