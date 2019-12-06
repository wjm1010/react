import React, { Component } from 'react';
import { Input , Button , List } from 'antd'
import store from './store'
import { actionType } from './store/actionTypes'
class demo3 extends Component {
  constructor(props){
    super(props)
    this.state=store.getState();
    store.subscribe(this.storeChange) 
  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div>
          <Input
            placeholder='hello' style={{ width:'250px', marginRight:'10px'}}
            onChange={this.changeInputValue.bind(this)}
            ref={(input)=>{this.input=input}}
            value={this.state.inputValue}
          />
          <Button type="primary" onClick={this.clickBtn}>增加</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item,index)=>(<List.Item onClick={this.delete.bind(this, index)}>{item}</List.Item>)}
          />    
        </div>
      </div>
    );
  }

  changeInputValue (e) {
    const action ={
      type: actionType.CHANGE_INPUT,
      value:e.target.value
    }
    store.dispatch(action)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  clickBtn = () => {
    const action = { type: actionType.ADD_ITEM}
    store.dispatch(action)
  }
  delete (index) {
    const action = { 
      type: actionType.DELETE_ITEM,
      index: index
    }
    store.dispatch(action)
  }
}
export default demo3;
