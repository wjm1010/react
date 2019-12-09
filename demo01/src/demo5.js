import React from 'react'
import { connect } from 'react-redux'
// class demo5 extends Component {
//   render() {
//     let {inputValue ,handleChange,clickButton,list } = this.props
//     return (
//       <div>
//         <div>
//           <input
//             value={inputValue}
//             onChange={handleChange} />
//           <button onClick={clickButton}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return (
//                 <li key={index} onClick={() => this.props.delete(index)}>
//                   {item}
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     )
//   }

// }
const demo5 = (props) => {
  let {inputValue ,handleChange,clickButton,list } = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={handleChange} />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={() => props.delete(index)}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
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

export default connect(stateToProps, mapDispatchToProps)(demo5)