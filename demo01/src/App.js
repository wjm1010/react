import React, {Component} from 'react'

class App extends Component {
  render () {
    return (
      <ul className="list-name">
        <li>{false ? 'hello' : '你好' }</li>
        <li>hi</li>
      </ul>
    )
  }
}

export default App