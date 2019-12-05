import React, { Component } from 'react';
import { Input , Button , List } from 'antd'
import store from './store'

class demo3 extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div>
          <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}}/>
          <Button type="primary">增加</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item=>(<List.Item>{item}</List.Item>)}
          />    
        </div>
      </div>
    );
  }
}
export default demo3;
