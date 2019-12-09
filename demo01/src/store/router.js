import { actionType } from './actionTypes'
// import axios from "axios";

export const setNavbar = (data) => ({
  type: actionType.GET_NAVBAR,
  data
})

export const setvideoNavbar = (data) => ({
  type: actionType.GET_VIDEONAVBAR,
  data
})

export const setworkplaceNavbar = (data) => ({
  type: actionType.GET_WORKNAVBAR,
  data
})

export const getData = () => {
  return (dispatch) => {
    // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    // .then((res)=>{
    let routeConfig = {
      navbar: [
        { path: '/', title: '博客首页', exact: true, component: Index },
        { path: '/video/', title: '视频教程', exact: false, component: Video },
        { path: '/workplace/', title: '职场技能', exact: false, component: Workplace },
      ],
      videoChildren: [
        { path: '/Video/reactpage', title: 'React教程', exact: false, component: Reactpage },
        { path: '/Video/vue', title: 'Vue教程', exact: false, component: Vue },
        { path: '/Video/flutter/', title: 'Flutter教程', exact: false, component: Flutter },
      ],
      workplaceChildren: [
        { path: '/workplace/Moeny/', title: '程序员加薪秘籍', exact: false, component: Money },
        { path: '/workplace/Getup/', title: '程序员早起攻略', exact: false, component: Getup }
      ]
    }
    const action = getRouter(routeConfig.navbar)
    dispatch(action)
    // }).catch((error)=>{console.log('axios 获取数据失败'+error)})
  }
}
