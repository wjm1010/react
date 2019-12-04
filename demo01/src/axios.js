import React, { Component } from 'react'
import axios from 'axios'

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        asd
      </div>
    )
  }
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
    .catch((error)=>{console.log('axios 获取数据失败'+error)})
  }
}

export default Axios;