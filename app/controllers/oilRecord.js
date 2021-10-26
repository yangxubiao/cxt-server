const OilRecord = require('../models/oilRecord')
const { encryptToJava } = require('../utils/encrypt');
const dayjs  = require('dayjs');

class OilRecordCtl {

  async getAllOilRecordRecords(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    const result = await OilRecord.find({...rest, createdAt: {$gte: startTime, $lte: endTime} }).limit(perPage).skip(page * perPage);
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
    await OilRecord.findByIdAndRemove(ctx.params.id)
    ctx.status = 204;
  }

  async getOilCleanRecordById(ctx) {
    const result = await OilRecord.findById(ctx.params.id)
    if (!result) { ctx.throw(404, '结清记录不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async updateOilCleanRecord(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: false, allowEmpty: true },
      nameId: { type: 'string', required: false, allowEmpty: true },
      oilName: { type: 'string', required: false, allowEmpty: true },
      oilId: { type: 'string', required: false, allowEmpty: true },
      proxyFee: { type: 'string', required: false, allowEmpty: true },
      chargeTunnage: { type: 'string', required: false, allowEmpty: true },
      chargeLnum: { type: 'string', required: false, allowEmpty: true },
      settleName: { type: 'string', required: false, allowEmpty: true },
      settleStatus: { type: 'string', required: false , allowEmpty: true},
    })
    const result = await OilRecord.findByIdAndUpdate(ctx.request.body._id, ctx.request.body);
    if (!result) { ctx.throw(404, '充值记录不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async createOilCleanRecord(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      nameId: { type: 'string', required: true },
      oilName: { type: 'string', required: true },
      oilId: { type: 'string', required: true },
      proxyFee: { type: 'string', required: true },
      chargeTunnage: { type: 'string', required: true },
      chargeLnum: { type: 'string', required: true },
      settleName: { type: 'string', required: true },
      settleStatus: { type: 'string', required: true },
    })
    const result = await new OilRecord(ctx.request.body).save();
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
}

module.exports = new OilRecordCtl();