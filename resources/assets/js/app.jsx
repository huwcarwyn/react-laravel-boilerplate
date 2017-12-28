require("react-hot-loader/patch")

import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { DashboardLayout } from 'layouts/Dashboard'
import { SignUp, LogIn, UserOverview } from 'pages'
import { AuthGuard } from 'components'

import { store, browserHistory } from './create-store'

export const App = (props) => {

  return (
	  <Provider store={store}>
		  <ConnectedRouter history={browserHistory}>
		    <Switch>
		      <Route path='/login' component={LogIn} />
		      <Route path='/signup' component={SignUp} />
		      <AuthGuard>
		        <DashboardLayout>
		          <Route path='/overview' component={UserOverview} />
		        </DashboardLayout>
		      </AuthGuard>
		    </Switch>
		  </ConnectedRouter>
		</Provider>
	)
}
