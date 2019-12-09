import { 
  createStore, applyMiddleware
} from 'redux'
import reducer from './reducer'
import thunk from "redux-thunk";
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)          // 创建数据存储仓库
export default store 