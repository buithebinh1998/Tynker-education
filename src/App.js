import React from 'react';
import { Route, Switch } from "react-router-dom"
import Layout from './hoc/Layout'
import Routes from './configs/Routes/Route';
import Loader from './component/Loader/Loader';
const renderRouteContainer = (routes) => routes.map((item,idx)=>
  <Route key = {item.idx} 
         exact = {item.exact} 
         component = {item.container} 
         path = {item.path}
         render= {() => {
           const otherComponent = React.lazy(() => {
            return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
              () =>
                Math.floor(Math.random() * 10) >= 4
                  ? import(`${item.container}`)
                  : Promise.reject(new Error())
            );
          });
           return otherComponent
         }}
         />
)
 
function App() {
  return (
      <Layout>
    <React.Suspense maxDuration={300} fallback = {Loader}>
        <Switch>
        {renderRouteContainer(Routes)}
      </Switch>
      </React.Suspense>
    </Layout>
    
        
  )
}
   
export default App;
