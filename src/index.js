import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/owl.carousel.css';
import './assets/css/popuo-box.css';
import './assets/css/lsb.css';
import './assets/css/style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
