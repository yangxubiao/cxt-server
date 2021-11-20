const OilDivideRecord = require('../models/oilDivideRecord')
const { encryptToJava } = require('../utils/encrypt');

class OilDivideRecordCtl {
  // 批量插入
  async insertMany(ctx) {
    const result = await OilDivideRecord.insertMany(ctx.request.body.data);
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
}

module.exports = new OilDivideRecordCtl();