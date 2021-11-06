const Recharges = require('../models/recharges')
const { encryptToJava } = require('../utils/encrypt');
const SummarySchema = require('../models/summary');
const { BigNumber } = require("bignumber.js");
const dayjs  = require('dayjs');

class RechargeCtl {

  async findAllRechargesList(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    const result = await Recharges.find({...rest, createdAt: {$gte: startTime, $lte: endTime} }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async createdRecharge(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      nameId: { type: 'string', required: true },
      carName: { type: 'string', required: true },
      carId: { type: 'string', required: true },
      proxyFee: { type: 'string', required: true },
      chargeTunnage: { type: 'string', required: true },
      chargeLnum: { type: 'string', required: true },
      settleName: { type: 'string', required: true },
      settleStatus: { type: 'string', required: true },
    })
    const result = await new Recharges(ctx.request.body).save();

    const findOneSummary = await SummarySchema.findOne({
      leaderId: ctx.request.body.nameId,
      carId: ctx.request.body.carId,
    })

    if (!findOneSummary?.carId) {
      await new SummarySchema({
        leaderName: ctx.request.body.name,
        leaderId: ctx.request.body.nameId,
        carName: ctx.request.body.carName,
        carId: ctx.request.body.carId,
        totalTunnage: ctx.request.body.chargeTunnage,
        avaliableTunnage: ctx.request.body.chargeTunnage,
        totalLnum: ctx.request.body.chargeLnum,
        avaliableLnum: ctx.request.body.chargeLnum,
      }).save();
    } else {
      const totalTunnage = (new BigNumber(findOneSummary.totalTunnage).plus(ctx.request.body.chargeTunnage).toFixed(2).toString());
      const totalLnum = (new BigNumber(findOneSummary.totalLnum).plus(ctx.request.body.chargeLnum).toFixed(2).toString());
      const avaliableTunnage = (new BigNumber(findOneSummary.avaliableTunnage).plus(ctx.request.body.chargeTunnage).toFixed(2).toString());
      const avaliableLnum = (new BigNumber(findOneSummary.avaliableLnum).plus(ctx.request.body.chargeLnum).toFixed(2).toString());
      await SummarySchema.findOneAndUpdate({
        leaderId: ctx.request.body.nameId,
        carId: ctx.request.body.carId
      },
        {
          avaliableLnum,
          avaliableTunnage,
          totalTunnage,
          totalLnum,
      });
    }

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
    await Recharges.findByIdAndRemove(ctx.params.id)
    ctx.status = 204;
  }

  async getRechargeById(ctx) {
    const result = await Recharges.findById(ctx.params.id)
    if (!result) { ctx.throw(404, '充值记录不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async updateRecharge(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: false, allowEmpty: true },
      nameId: { type: 'string', required: false, allowEmpty: true },
      carName: { type: 'string', required: false, allowEmpty: true },
      carId: { type: 'string', required: false, allowEmpty: true },
      proxyFee: { type: 'string', required: false, allowEmpty: true },
      chargeTunnage: { type: 'string', required: false, allowEmpty: true },
      chargeLnum: { type: 'string', required: false, allowEmpty: true },
      settleName: { type: 'string', required: false, allowEmpty: true },
      settleStatus: { type: 'string', required: false , allowEmpty: true},
    })
    const result = await Recharges.findByIdAndUpdate(ctx.request.body._id, ctx.request.body);
    if (!result) { ctx.throw(404, '充值记录不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentLoginederRechargesList(ctx) {
    const result = await Recharges.find({ nameId: ctx.state.user._id }).sort({ createdAt : -1 });
    if (!result) { ctx.throw(404, '充值记录不存在'); }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentUserRechargesList(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    const result = await Recharges.find({
      carName: ctx.state.user.carName,
      carId: ctx.state.user.carId,
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

module.exports = new RechargeCtl();