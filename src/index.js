import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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
// import createStore from './createStore';
// import {Provider} from 'react-redux'

// const store = createStore();

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
