import { actionType } from './actionTypes'

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