const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
// const router = new Router({
//   prefix: '/jspang' // 层级路由
// })

// router
//   .get('/', (ctx, next) => {
//     ctx.body = 'hello,world'
//   })
//   .get('/index',(ctx, next)=>{
//     ctx.body = 'hello,index'
//   })

const home = new Router()
home.get('/', async (ctx) => {
  ctx.body = 'hello,/'
}).get('/index', async (ctx) => {
  ctx.body = 'hello,index'
})

const router = new Router()
router.use('/home', home.routes(), home.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('------------------')
})