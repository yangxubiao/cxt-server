const Oil = require('../models/oil')
const { encryptToJava } = require('../utils/encrypt');
const SummarySchema = require('../models/summary');
const { BigNumber } = require("bignumber.js");
const dayjs  = require('dayjs');

class OilCtl {

  async getAllGasRecords(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    const result = await Oil.find({...rest, createdAt: {$gte: startTime, $lte: endTime} }).limit(perPage).skip(page * perPage);
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentCarOwnerGasRecord(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    const result = await Oil.find({
      ...rest,
      carId: ctx.state.user.carId,
      carName: ctx.state.user.carName, 
      createdAt: {$gte: startTime, $lte: endTime} 
    }).limit(perPage).skip(page * perPage);
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentGasSiteRecord(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      isWhole = false,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    let result = [];
    if (isWhole) {
      result = await Oil.find({
        oilName: ctx.state.user.gasName,
        oilId: ctx.state.user.gasId,
      })
    } else {
      result = await Oil.find({
        ...rest,
        oilName: ctx.state.user.gasName,
        oilId: ctx.state.user.gasId,
        createdAt: {$gte: startTime, $lte: endTime} 
      }).limit(perPage).skip(page * perPage);
    }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentLoginGasRecord(ctx) {
    const { per_page = 10, query_page = 1 } = ctx.query;
    const page = Math.max(query_page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const {
      time,
      isWhole = false,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    let result = [];
    if (isWhole) {
      result = await Oil.find({
        userId: ctx.state.user._id,
      })
    } else {
      result = await Oil.find({
        ...rest,
        carId: ctx.state.user.carId,
        userId: ctx.state.user._id,
        carName: ctx.state.user.carName, 
        createdAt: {$gte: startTime, $lte: endTime} 
      }).limit(perPage).skip(page * perPage);
    }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
  async createOilRecord(ctx) {
    ctx.verifyParams({
      userId: { type: 'string', required: true },
      carNo: { type: 'string', required: true },
      carName: { type: 'string', required: true },
      carId: { type: 'string', required: true },
      carProxyFee: { type: 'string', required: true },
      oilName: { type: 'string', required: true },
      oilId: { type: 'string', required: true },
      oilProxyFee: { type: 'string', required: true },
      oilLnum: { type: 'string', required: true },
      oilImg: { type: 'string', required: true },
    })
    const findOneSummary = await SummarySchema.findOne({
      userId: ctx.request.body.carId,
    })
    if(!findOneSummary?.carId) {
      ctx.body = encryptToJava(JSON.stringify({
        success: false,
        errorMas: '没有找到车队的充值记录, 请联系管理员充值',
        errorCode: '',
        result: null,
      }));
      return ;
    } else {
      if ((new BigNumber(findOneSummary.avaliableLnum).minus(ctx.request.body.oilLnum).toNumber()) < 0) {
        ctx.body = encryptToJava(JSON.stringify({
          success: false,
          errorMas: `请联系管理员充值, 当前账号剩余${findOneSummary.avaliableLnum}升`,
          errorCode: '',
          result: null,
        }));
        return ;
      }
      const avaliableLnum = (new BigNumber(findOneSummary.avaliableLnum).minus(ctx.request.body.oilLnum).toFixed(2).toString());
      const avaliableTunnage = (new BigNumber(avaliableLnum).div(process.env.DEFAULT_L_NUM).toFixed(2).toString());
      await SummarySchema.findOneAndUpdate({
        carId: ctx.request.body.carId
      },
        {
          avaliableLnum,
          avaliableTunnage,
      });

      const result = await new Oil(ctx.request.body).save();
      ctx.body = encryptToJava(JSON.stringify({
        success: true,
        errorMas: '',
        errorCode: '',
        result,
      }));
    }


  }
}

module.exports = new OilCtl();