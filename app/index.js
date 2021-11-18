const Koa = require('koa');
const koaBody = require('koa-body')
const app = new Koa();
const cors = require('koa-cors');
const mongooses = require('mongoose');
const path = require('path')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const routing = require('./routes')
const jsonwebtoken = require('jsonwebtoken')
const koaStatic = require('koa-static')
const Users = require('./models/users')

require('./utils/doenv')
const { decryptToObj } = require('./utils/encrypt');

mongooses.connect(process.env.MONGOOSES_SERVER_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }, ()=> {
  console.log('连接成功')
});

mongooses.connection.on('error', console.error)

app.use(koaStatic(path.join(__dirname, 'public')));
app.use(error({postFormat: (e, {stack, ...rest}) => ( process.env.NODE_ENV === 'production' ? rest : {stack, ...rest})
}))
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'),
    keepExtensions: true,
  }
}))
app.use(cors());
app.use(parameter(app))
app.use( async (ctx, next) => {
  if (ctx.request.url !== '/users/login') {
    const { authorization = ''} = ctx.request.header;
    const token = authorization.replace('Bearer ', '');
    try {
      const user = jsonwebtoken.verify(token, process.env.JSON_WEB_TOKEN_CODE, { maxAge: '730d' });
      const result = await Users.findById(user._id)
      if (result.freeStatus === '1') {
        ctx.throw(401, '账号已冻结')
      }
      ctx.state.user = user;
    } catch (err) {
      ctx.throw(403, err.message)
    }
  }

  if (ctx?.request?.body?.isEncrypt) {
    ctx.request.body = decryptToObj(ctx.request.body.jsonObject)
  }
  await next()
})

routing(app)

app.listen(3000);