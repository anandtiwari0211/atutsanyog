import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/owl.carousel.css';
import './assets/css/popuo-box.css';
import './assets/css/lsb.css';
import './assets/css/style.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
