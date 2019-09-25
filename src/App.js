import React from 'react';

 import { Route, Switch } from "react-router-dom"
 import TrangChu from './container/TrangChu'
 import KhoaHoc from './container/KhoaHoc'
 import GiaoVien from './container/GiaoVien'
 import GioiThieu from './container/GioiThieu'
 import LienHe from './container/LienHe'
 import Layout from './hoc/Layout'
function App() {
  return (
    <Layout>
        <Switch>
      <Route path = '/' exact component ={TrangChu}  />
      <Route path = '/khoahoc' component = {KhoaHoc} />
      <Route path = '/giaovien' component = {GiaoVien} />
      <Route path ='/gioithieu' component = {GioiThieu} />
      <Route path ='/lienhe' component = {LienHe} />
      </Switch>
    </Layout>
  
  )
}
   
export default App;
