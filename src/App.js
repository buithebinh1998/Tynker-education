import React, { Suspense } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { routersAuth, routersNotAuth } from "./configs/Routes/Route";
import Layout from './hoc/Layout'
import { Provider } from 'react-redux'
import Store, { persistor } from './configs/Store/Store'
import Loader from './component/Loader/Loader'
import { PersistGate } from "redux-persist/integration/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import history from './configs/History/History'


require('dotenv').config()
function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<Loader load="component" />}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Suspense>
  )
}

const renderRouteContainer = routes =>
  routes.map((item, idx) => (
    <Route
      key={idx}
      exact={item.exact}
      component={WaitingComponent(item.container)}
      path={item.path}
    />
  ))

function App() {

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="page"
                >
                  <Switch>
                    {renderRouteContainer(routersNotAuth)}
                    {renderRouteContainer(routersAuth)}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
