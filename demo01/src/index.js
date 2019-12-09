import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import Demo from './demo5';
import 'antd/dist/antd.css'
// import * as serviceWorker from './serviceWorker';

const App = (
  <Provider store={store}>
    <Demo/>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// serviceWorker.unregister();
