import React from 'react';
import ReactDOM from 'react-dom';
// import Router from './router'
import Router from './router/appindex'
// import './index.css';
// import App from './App';
// import 'antd/dist/antd.css'
// import * as serviceWorker from './serviceWorker';

// const App = (
//   <Provider store={store}>
//     <Demo/>
//   </Provider>
// )

ReactDOM.render(<Router />, document.getElementById('root'));

// serviceWorker.unregister();
