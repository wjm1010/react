const Koa = require("koa")
const app = new Koa()
const bodyparser = require("koa-bodyparser")

app.use(bodyparser())

app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>hello</h1>
      <from method="POST" action="/">
        <lable>userName</lable>
        <input name="userName">
        <lable>age</lable>
        <input name="age">
        <input type="submit">
      </from>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body
    ctx.body = postData
    console.log(ctx.request)
  } else {
    ctx.body = `<h1>404</h1>`
  }
})

app.listen(3000, () => {
  console.log('demo server is starting at port 3000')
})
