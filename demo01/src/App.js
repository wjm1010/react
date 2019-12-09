import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Demo from './demo5';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Demo/>
      </Provider>
    )
  }

}

export default App