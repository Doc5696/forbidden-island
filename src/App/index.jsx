import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import LogIn from '../scenes/LogIn/conrainer'
import Dashboard from '../scenes/Dashboard/conrainer'

function App({
  isLoggedIn = true,
}) {
  return (
    <Switch>
      <Route
        exact
        path="/signin"
        component={LogIn}
      />
      <Route
        render={() => (!isLoggedIn ? (
          <Redirect to="/signin" />
        ) : (
          <Dashboard />
        ))}
      />
    </Switch>
  )
}

export default App
