import React, { Component } from 'react'

class Demo1 extends Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  render() { 
    return ( 
      <div onClick={this.handleClick}>
        {this.props.content}
      </div>
    )
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
    console.log(this.props.index)
  }
}
 
export default Demo1