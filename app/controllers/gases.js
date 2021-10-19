const Gases = require('../models/gases')
const { encryptToJava } = require('../utils/encrypt');

class GasesCtl {

  async findAllGasesSitesList(ctx) {
    const result = await Gases.find();
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
  async createGasSite(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      proxyFee: { type: 'string', required: true },
    })
    const result = await new Gases(ctx.request.body).save();
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
    await Gases.findByIdAndRemove(ctx.params.id)
    ctx.status = 204;
  }

}

module.exports = new GasesCtl();