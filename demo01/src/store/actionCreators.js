import { actionType } from './actionTypes'
import axios from "axios";
export const changeInputAction = (value) => ({
  type: actionType.CHANGE_INPUT,
  value
})
export const clickBtnAction = () => ({
  type: actionType.ADD_ITEM
})
export const deleteAction = (index) => ({
  type: actionType.DELETE_ITEM,
  index
})
export const getlist = (data) => ({
  type: actionType.GET_LIST,
  data
})

export const getData = () => {
  return (dispatch) => {
    console.log('============')
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then((res)=>{
      const action = getlist(res.data)
      dispatch(action)
    }).catch((error)=>{console.log('axios 获取数据失败'+error)})
  }
}