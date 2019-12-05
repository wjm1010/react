import React, {Component, Fragment} from 'react'
import Demo1 from './Demo1'
import Demo2 from './demo2'
import Lifecycle from './lifecycle'
import Axios from './axios'
import PropTypes from 'prop-types'  // 校验
import axios from 'axios'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'haha',
      list: []
    }
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputId">加入服务：</label>
          <input 
            id="inputId" 
            value={this.state.inputValue} 
            onChange={this.inputChange}
            ref={(input)=>{this.input=input}}/> 
          <button onClick={this.addList}> 增加服务 </button>
        </div>
        <ul ref={e=>this.ul=e}>
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
        <div>
          <Lifecycle />
        </div>
        <div>
          <Axios />
        </div>
        <div>
          <Demo2 />
        </div>
      </Fragment>
    )
  }
  componentDidMount() {
    axios.get('xxxx').then((res)=>{
      console.log('axios 获取数据成功:'+JSON.stringify(res))
      this.setState({
          list: res.data.data
      })
    }).catch((error)=>{console.log('axios 获取数据失败'+error)})
  }

  inputChange = () => {
    this.setState({ inputValue: this.input.value })
  }

  addList = () => {
    console.log(this.ul)
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    }, () => { // 异步
      console.log(this.ul.querySelectorAll('li').length)
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
  // index: PropTypes.number.isRequired
}

export default Demo