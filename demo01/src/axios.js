import React, { Component } from 'react'
import { getData } from "./store/actionCreators";
import store from "./store";

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>

      </div>
    )
  }
  componentDidMount() {
    this.getdata()
  }
  getdata() {
    const action = getData()
    store.dispatch(action)
  }
}

export default Axios;