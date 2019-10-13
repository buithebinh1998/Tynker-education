import React from 'react';

 import { Route, Switch } from "react-router-dom"
 import {Provider} from 'react-redux';
 import TrangChu from './container/TrangChu'
 import KhoaHoc from './container/KhoaHoc'
 import GiaoVien from './container/GiaoVien'
 import GioiThieu from './container/GioiThieu'
 import LienHe from './container/LienHe'
 import Layout from './hoc/Layout'
 import FormLoginPage from './container/FormLoginPage'
 import FormRegisterPage from './container/FormRegisterPage'
function App() {
  return (
    <Layout>
        <Switch>
      <Route path = '/' exact component ={TrangChu}  />
      <Route path = '/khoahoc' component = {KhoaHoc} />
      <Route path = '/giaovien' component = {GiaoVien} />
      <Route path ='/gioithieu' component = {GioiThieu} />
      <Route path ='/lienhe' component = {LienHe} />
      <Route path ='/dangnhap' component ={FormLoginPage}/>
      <Route path ='/dangky' component ={FormRegisterPage}/>
      </Switch>
    </Layout>
  
  )
}
   
export default App;
