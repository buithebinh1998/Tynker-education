import React from 'react';

 import { Route, Switch } from "react-router-dom"
 import TrangChu from './container/TrangChu'
 import KhoaHoc from './container/KhoaHoc'
 import GiaoVien from './container/GiaoVien'
 import GioiThieu from './container/GioiThieu'
 import LienHe from './container/LienHe'

function App() {
  return (
    <Switch>
      <Route path = '/' exact component ={TrangChu} />
      <Route path = '/khoahoc' component = {KhoaHoc}/>
      <Route path = '/giaovien' component = {GiaoVien}/>
      <Route path ='/gioithieu' component = {GioiThieu}/>
      <Route path ='/lienhe' component = {LienHe}/>
    </Switch>
  )
}
   
export default App;
