import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import './css/bootstrap/bootstrap-grid.css'
import './css/bootstrap/bootstrap-reboot.css'
import './css/css/mixins/_text-hide.css';
import './css/animate.css';
import './css/aos.css';
import './css/bootstrap-datepicker.css'
import './css/open-iconic-bootstrap.min.css'
import './css/bootstrap.min.css'
 import  './css/icomoon.css'
  import './css/flaticon.css'
 import './css/jquery.timepicker.css'
 import './css/style.css'
const app = (

  <BrowserRouter>
    <App />
  </BrowserRouter>

);
ReactDOM.render(app , document.getElementById('root'));


serviceWorker.unregister();
