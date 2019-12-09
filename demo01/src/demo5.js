import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'
class demo5 extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleChange} />
          <button onClick={this.props.clickButton}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.props.delete(index)}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      let action = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(action)
    },
    clickButton() {
      let action = { type: 'addItem' }
      dispatch(action)
    },
    delete(index) {
      let action = { 
        type: 'deleteItem',
        index
       }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, mapDispatchToProps)(demo5);