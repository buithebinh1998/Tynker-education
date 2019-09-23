import React from 'react';
import logo from './logo.svg';

 import { Route, Switch } from "react-router-dom"
 import TrangChu from './container/TrangChu'
 import KhoaHoc from './container/KhoaHoc'

function App() {
  return (
    <Switch>
      <Route path = '/' exact component ={TrangChu} />
      <Route path = '/khoahoc' component = {KhoaHoc}/>
    </Switch>
  )
}
   
export default App;
