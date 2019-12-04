import React, { Component } from 'react'

class Demo1 extends Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  // shouldComponentUpdate有两个参数：
    // nextProps:变化后的属性;
    // nextState:变化后的状态
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState)
    if(nextProps.content !== this.props.content){
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('child-render')
    return ( 
      <li onClick={this.handleClick}>
        {this.props.content}
      </li>
    )
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
    console.log(this.props.index)
  }
}
 
export default Demo1