const path = require('path');
const { encryptToJava } = require('../utils/encrypt');
const Summary = require('../models/summary')

class SummaryCtl {
  async queryCarOwnerGasInfo(ctx) {
    const result = await Summary.findOne(ctx.request.body);
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async findAllSummaryList(ctx) {
    const result = await Summary.find().sort({ createdAt : -1 });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
}

module.exports = new SummaryCtl();