import React, {Component, Fragment} from 'react'
import Demo1 from './Demo1'
import PropTypes from 'prop-types'  // 校验


class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'haha',
      list: ['aaaa', 'bbbbb']
    }
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="jspang">加入服务：</label>
          <input id="jspang" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> 
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                // <li 
                //   key={index+item}
                //   onClick={this.deleteItem.bind(this,index)}
                //   dangerouslySetInnerHTML={{__html:item}}>
                //     {/* dangerouslySetInnerHTML 可以实现html格式的输出*/}
                // </li>
                <Demo1
                  content={item}
                  key={index}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}/>
              )
            })
          }
        </ul> 
      </Fragment>
    )
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem(index) {
    let list  = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list
    })
  }

}

Demo.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number.isRequired
}

export default Demo