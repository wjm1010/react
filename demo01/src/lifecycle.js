import React, { Component } from 'react'

class Lifecycle extends Component {
  // 在某一时刻可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {  }
  }
  // componentWillMount() {
  //   console.log('componentWillMount -- 组件将要挂载到页面')
  // }

  render() {
    console.log('render -- 挂载阶段中')
    return ( 
      <div>
        qq
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount -- 组件挂载完成')
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate---组件发生改变前执行，在组件更新之前，自动被执行')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate---组件更新之后执行')
  }
  // 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps---第一次存在于Dom中，函数是不会被执行的,如果已经存在于Dom中，函数才会被执行')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount---组件从页面中删除的时候执行')
  }
}
 
export default Lifecycle