import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import Routes from "./configs/Routes/Route";
const renderRouteContainer = routes =>
  routes.map((item, idx) => (
    <Route
      key={idx}
      exact={item.exact}
      component={item.container}
      path={item.path}
      render={() => {
        const otherComponent = React.lazy(() => {
          return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
            () =>
              Math.floor(Math.random() * 10) >= 4
                ? import(`${item.container}`)
                : Promise.reject(new Error())
          );
        });
        return otherComponent;
      }}
    />
  ));

function App() {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Layout>
        <Switch>{renderRouteContainer(Routes)}</Switch>
      </Layout>
    </React.Suspense>
  );
}

export default App;
