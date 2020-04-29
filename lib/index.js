const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())

try {
    const server = app.listen(4000, () => {
        console.log(server.address())
    })
} catch (e) {
    console.log(typeof e)
}
