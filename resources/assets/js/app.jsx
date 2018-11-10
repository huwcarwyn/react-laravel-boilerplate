import React, { lazy, Suspense, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { DashboardLayout, FormPageLayout } from 'layouts'

const LogIn = lazy(() => import('pages/LogIn/LogIn'))
const SignUp = lazy(() => import('pages/SignUp/SignUp'))
const Overview = lazy(() => import('pages/Overview/Overview'))
const PasswordReset = lazy(() => import('pages/PasswordReset/PasswordReset'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword/ForgotPassword'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))
const SettingsRoutes = lazy(() => import('pages/Settings/SettingsRoutes'))

import { AuthGuard, FlashMessageRoot, ModalProviderWrapper, ModalRoot } from 'components'

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

const Loading = () => (
  <div className="flex h-screen items-center">
    <div className="w-screen text-3xl text-center text-grey">Loading...</div>
  </div>
)

export const App = (props) => (
  <ModalProviderWrapper>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <FlashMessageRoot />
        <ConnectedRouter history={browserHistory}>
          <Fragment>
            <ModalRoot />
            <Switch>
              <Route exact path='/login' render={() => {console.log(LogIn); return <FormPageLayout title="Log In"><LogIn /></FormPageLayout>}} />
              <Route exact path='/signup' render={() => <FormPageLayout title="Sign Up"><SignUp /></FormPageLayout>} />
              <Route exact path='/forgot-password' render={() => <FormPageLayout title="Forgot Password"><ForgotPassword /></FormPageLayout>} />
              <Route exact path='/reset-password/:resetToken' render={() => <FormPageLayout title="Reset Password"><PasswordReset /></FormPageLayout>} />

              {/* Dashboard routes */}
              <Route exact path='/' component={withDashboard(Overview)} />
              <Route path='/settings' component={withDashboard(SettingsRoutes)} />
              {/* 404 route */}
              <Route path="*" exact={true} component={NotFound}/>
            </Switch>
          </Fragment>
        </ConnectedRouter>
      </Suspense>
    </Provider>
  </ModalProviderWrapper>
)
