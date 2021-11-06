const Cars = require('../models/cars')
const { encryptToJava } = require('../utils/encrypt');

class CarsCtl {

  async findAllCarsList(ctx) {
    const result = await Cars.find().sort({ createdAt : -1 });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async create(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      proxyFee: { type: 'string', required: true },
    })
    const result = await new Cars(ctx.request.body).save();
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
    await Cars.findByIdAndRemove(ctx.params.id)
    ctx.status = 204;
  }
}

module.exports = new CarsCtl();