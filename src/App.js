import React, { Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Layout from './hoc/Layout'
import Routes from './configs/Routes/Route'
import { Provider } from 'react-redux'
import Store, { persistor } from './configs/Store/Store'
import Loader from './component/Loader/Loader'
import { PersistGate } from "redux-persist/integration/react";
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
  // import { applyMiddleware, createStore, compose } from "redux";

  // // import rootReducer from './reducer';

  // const middleware  = [];

  // const enhancers = [applyMiddleware(...middleware)]

  // const getComposer = () => {
  //     if (process.env.NODE_ENV === 'production'){
  //         return compimport {applyMiddleware,createStore,compose} from 'redux';

  // // import rootReducer from './reducer';

  // const middleware  = [];

  // const enhancers = [applyMiddleware(...middleware)]

  // const getComposer = () => {
  //     if (process.env.NODE_ENV === 'production'){
  //         return compose
  //     }
  //     return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  // }
  // const composer = getComposer()

  // export default (initialState = {}) => {
  //   const store = createStore(rootReducer, initialState, composer(...enhancers))
  //   return { store }
  // }ose
  //     }
  //     return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  // }
  // const composer = getComposer()

  // export default (initialState = {}) => {
  //   const store = createStore(rootReducer, initialState, composer(...enhancers))
  //   return { store }
  // }
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>{renderRouteContainer(Routes)}</Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
