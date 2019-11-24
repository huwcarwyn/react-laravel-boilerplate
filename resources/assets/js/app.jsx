import { Provider } from 'react-redux'
import React, { lazy, Suspense } from 'react'
import { ModalProvider } from 'react-context-modals'
import { Router, Route, Switch } from 'react-router-dom'

import { AuthGuard, FlashMessageRoot } from 'components'
import { history } from 'utils/history'
import { store } from 'store/create-store'
import { DashboardLayout, FormPageLayout } from 'layouts'

const LogIn = lazy(() => import('pages/LogIn/LogIn'))
const SignUp = lazy(() => import('pages/SignUp/SignUp'))
const Overview = lazy(() => import('pages/Overview/Overview'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))
const SettingsRoutes = lazy(() => import('pages/Settings/SettingsRoutes'))
const PasswordReset = lazy(() => import('pages/PasswordReset/PasswordReset'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword/ForgotPassword'))

const withDashboard = ContentComponent => {
  return props => (
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

const OverviewWithDashboard = withDashboard(Overview)
const SettingsWithDashboard = withDashboard(SettingsRoutes)

export const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <FlashMessageRoot />
      <Router history={history}>
        <ModalProvider>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <FormPageLayout title="Log In">
                  <LogIn />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/signup"
              render={() => (
                <FormPageLayout title="Sign Up">
                  <SignUp />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/forgot-password"
              render={() => (
                <FormPageLayout title="Forgot Password">
                  <ForgotPassword />
                </FormPageLayout>
              )}
            />
            <Route
              exact
              path="/reset-password/:resetToken"
              render={() => (
                <FormPageLayout title="Reset Password">
                  <PasswordReset />
                </FormPageLayout>
              )}
            />

            {/* Dashboard routes */}
            <Route exact path="/" component={OverviewWithDashboard} />
            <Route path="/settings" component={SettingsWithDashboard} />
            {/* 404 route */}
            <Route path="*" exact={true} render={() => <NotFound />} />
          </Switch>
        </ModalProvider>
      </Router>
    </Suspense>
  </Provider>
)
