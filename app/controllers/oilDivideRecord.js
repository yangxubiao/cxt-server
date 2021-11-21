const OilDivideRecord = require('../models/oilDivideRecord')
const { encryptToJava } = require('../utils/encrypt');
const dayjs  = require('dayjs');

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
  async getOilDivideRecord(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    const result = await OilDivideRecord.find({
      ...rest,
      createdAt: {$gte: startTime, $lte: endTime} 
    }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
}

module.exports = new OilDivideRecordCtl();