const Users = require('../models/users')
const jsonwebtoken = require('jsonwebtoken')
const { encryptToJava } = require('../utils/encrypt');

class UsersCtl {

  async findAllUsersList(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const { isWhole = false,  ...rest } = ctx.request.body;
    let result = [];
    if (isWhole) {
      result = await Users.find(rest).sort({ createdAt : -1 });
    } else {
      result = await Users.find(rest).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
    }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async createUser(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      phone: { type: 'string', required: true },
      freeName: { type: 'string', required: true },
      freeStatus: { type: 'string', required: true },
      password: { type: 'string', required: true },
      roleName: { type: 'string', required: true },
      roleNo: { type: 'string', required: true },
      gasMode: { type: 'string', required: false, allowEmpty: true},
      gasModeName: { type: 'string', required: false, allowEmpty: true},
      availableLum: { type: 'string', required: false, allowEmpty: true},
      carName: { type: 'string', required: false, allowEmpty: true},
      carId: { type: 'string', required: false, allowEmpty: true},
      carProxyFee: { type: 'string', required: false, allowEmpty: true},
      carNo: { type: 'string', required: false, allowEmpty: true },
      gasName: { type: 'string', required: false, allowEmpty: true },
      gasId: { type: 'string', required: false, allowEmpty: true},
      gasProxyFee: { type: 'string', required: false, allowEmpty: true},
    })
    const { name } = ctx.request.body;
    const repeatedUser = await Users.findOne({name});
    if (repeatedUser) {
      ctx.throw(409, '用户已经存在')
    }
    const result = await new Users(ctx.request.body).save();
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async delete(ctx) {
    ctx.verifyParams({
      id: { type: 'string', required: true },
    })
    await Users.findByIdAndRemove(ctx.params.id)
    ctx.status = 204;
  }
  
  async login(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true },
    });
    const user = await Users.findOne(ctx.request.body);
    if (!user) {ctx.throw(401, '用户名或密码不正确');}
    const { _id, name, freeStatus, carId, gasId, carName, gasName } = user;
    if (freeStatus === '1') {
      ctx.throw(401, '账号已冻结')
    }
    const token = jsonwebtoken.sign({ _id, name, freeStatus, carId, gasId, carName, gasName}, process.env.JSON_WEB_TOKEN_CODE, { expiresIn: '1825 days' })
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result: {
        token
      },
    }));
  }

  async updatePassword(ctx) {
    ctx.verifyParams({
      oldPassword: { type: 'string', required: true },
      password: { type: 'string', required: true },
      confirmPassWord: { type: 'string', required: true },
    });
    const oldUser = await Users.findById(ctx.state.user._id).select('+password');
    if (!oldUser || oldUser.password !== ctx.request.body.oldPassword) {
      {ctx.throw(401, '原密码输入不正确')}
    }

    const result = await Users.findByIdAndUpdate(ctx.state.user._id, {
      password: ctx.request.body.password
    });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async updateUser(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: false, allowEmpty: true },
      phone: { type: 'string', required: false, allowEmpty: true },
      freeName: { type: 'string', required: false, allowEmpty: true },
      freeStatus: { type: 'string', required: false, allowEmpty: true },
      password: { type: 'string', required: false, allowEmpty: true },
      roleName: { type: 'string', required: false, allowEmpty: true },
      roleNo: { type: 'string', required: false, allowEmpty: true },
      gasMode: { type: 'string', required: false, allowEmpty: true},
      gasModeName: { type: 'string', required: false, allowEmpty: true},
      availableLum: { type: 'string', required: false, allowEmpty: true},
      carName: { type: 'string', required: false, allowEmpty: true},
      carId: { type: 'string', required: false, allowEmpty: true},
      carProxyFee: { type: 'string', required: false, allowEmpty: true},
      carNo: { type: 'string', required: false, allowEmpty: true },
      gasName: { type: 'string', required: false, allowEmpty: true },
      gasId: { type: 'string', required: false, allowEmpty: true},
      gasProxyFee: { type: 'string', required: false, allowEmpty: true},
    })
    const result = await Users.findByIdAndUpdate(ctx.request.body._id, ctx.request.body);
    if (!result) { ctx.throw(404, '用户不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getUserById(ctx) {
    const result = await Users.findById(ctx.params.id)
    if (!result) { ctx.throw(404, '用户不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  // 获取所有车队的用户
  async getAllCarsList(ctx) {
    const result = await Users.find({roleNo: '1'}).sort({ createdAt : -1 });
    if (!result) { ctx.throw(404, '用户不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  // 获取所有的加油点
  async getAllOillist(ctx) {
    const result = await Users.find({roleNo: '3'}).sort({ createdAt : -1 });
    if (!result) { ctx.throw(404, '用户不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentUserAllDrivesList(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const { isWhole = false, valueKey,  ...rest } = ctx.request.body;
    let result = [];
    if (isWhole) {
      if (valueKey) {
        var reg = new RegExp(valueKey, "i");
        var _filter = [
          //多字段匹配
          {name: {$regex: reg}},
          {carNo: {$regex: reg}},
        ]
        result = await Users.find({roleNo: '2', carId: ctx.state.user.carId, ...rest, $or: _filter}).sort({ createdAt : -1 });
      } else {
        result = await Users.find({roleNo: '2', carId: ctx.state.user.carId, ...rest}).sort({ createdAt : -1 });
      }
    } else {
      result = await Users.find({roleNo: '2', carId: ctx.state.user.carId, ...rest}).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
    }
    if (!result) { ctx.throw(404, '用户不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentUser(ctx) {
    const result = await Users.findById(ctx.state.user._id)
    if (!result) { ctx.throw(404, '用户不存在');}
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async updateMany(ctx) {
    const { data } = ctx.request.body;
    let result = [];
    for(let i = 0; i < data.length; i ++) {
      const {_id, ...rest} = data[i]
      const user = await Users.findByIdAndUpdate(_id, rest);
      if (!user) { ctx.throw(404, '用户不存在'); }
      result.push(user);
    }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

}

module.exports = new UsersCtl();