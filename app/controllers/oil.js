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
    const result = await Oil.find({...rest, createdAt: {$gte: startTime, $lte: endTime} }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });;
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
      valueKey,
      ...rest 
    } = ctx.request.body;
    const startTime = dayjs(dayjs(time).format('YYYY-MM')).toDate();
    const endTime = dayjs(dayjs(time).add(1, 'month').format('YYYY-MM')).toDate();
    let result;
    if (valueKey) {
      var reg = new RegExp(valueKey, "i");
      var _filter = [
        {carNo: {$regex: reg}},
      ]
      result = await Oil.find({
        ...rest,
        carId: ctx.state.user.carId,
        carName: ctx.state.user.carName, 
        createdAt: {$gte: startTime, $lte: endTime},
        $or: _filter
      }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
    } else {
      result = await Oil.find({
        ...rest,
        carId: ctx.state.user.carId,
        carName: ctx.state.user.carName, 
        createdAt: {$gte: startTime, $lte: endTime} 
      }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
    }
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getOilRecordById(ctx) {
    const result = await Oil.findById(ctx.params.id);
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
      }).sort({ createdAt : -1 });
    } else {
      result = await Oil.find({
        ...rest,
        oilName: ctx.state.user.gasName,
        oilId: ctx.state.user.gasId,
        createdAt: {$gte: startTime, $lte: endTime} 
      }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
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
      }).sort({ createdAt : -1 });
    } else {
      result = await Oil.find({
        ...rest,
        carId: ctx.state.user.carId,
        userId: ctx.state.user._id,
        carName: ctx.state.user.carName, 
        createdAt: {$gte: startTime, $lte: endTime} 
      }).limit(perPage).skip(page * perPage).sort({ createdAt : -1 });
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
      phone: { type: 'string', required: true },
      carNo: { type: 'string', required: true },
      carName: { type: 'string', required: true },
      carId: { type: 'string', required: true },
      carProxyFee: { type: 'string', required: true },
      oilName: { type: 'string', required: true },
      gasMode: { type: 'string', required: true },
      oilId: { type: 'string', required: true },
      oilProxyFee: { type: 'string', required: true },
      oilLnum: { type: 'string', required: true },
      oilImg: { type: 'string', required: false, allowEmpty: true},
    })
    if (ctx.request.body.gasMode === 'divide') {
      const result = await new Oil(ctx.request.body).save();
      ctx.body = encryptToJava(JSON.stringify({
        success: true,
        errorMas: '',
        errorCode: '',
        result,
      }));
      return;
    }
    // ??????????????????
    const findOneSummary = await SummarySchema.findOne({
      carId: ctx.request.body.carId,
    })
    // ???????????????????????????
    if(!findOneSummary?.carId) {
      ctx.body = encryptToJava(JSON.stringify({
        success: false,
        errorMas: '?????????????????????????????????, ????????????????????????',
        errorCode: '',
        result: null,
      }));
      return ;
    } else {
      // ?????????????????? - ?????????????????? ????????????
      if ((new BigNumber(findOneSummary.avaliableLnum).minus(ctx.request.body.oilLnum).toNumber()) < 0) {
        ctx.body = encryptToJava(JSON.stringify({
          success: false,
          errorMas: `????????????????????????, ??????????????????${findOneSummary.avaliableLnum}???`,
          errorCode: '',
          result: null,
        }));
        return ;
      }
      // ??????????????????
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

  async divideOil(ctx) {
    ctx.verifyParams({
      carId: { type: 'string', required: true },
      lnum: { type: 'string', required: true },
      gasMode: { type: 'string', required: true }, // div ????????? divide , ??????
    })
    // ??????????????????
    const findOneSummary = await SummarySchema.findOne({
      carId: ctx.request.body.carId,
    })
    // ???????????????????????????
    if(!findOneSummary?.carId) {
      ctx.body = encryptToJava(JSON.stringify({
        success: false,
        errorMas: '?????????????????????????????????, ????????????????????????',
        errorCode: '',
        result: null,
      }));
      return ;
    } else {
      // ??????????????????
      let avaliableLnum = '';
      if (ctx.request.body.gasMode === 'divide') {
        avaliableLnum = (new BigNumber(findOneSummary.avaliableLnum).minus(ctx.request.body.lnum).toFixed(2).toString());
      } else {
        avaliableLnum = (new BigNumber(findOneSummary.avaliableLnum).plus(ctx.request.body.lnum).toFixed(2).toString());
      }
      const avaliableTunnage = (new BigNumber(avaliableLnum).div(process.env.DEFAULT_L_NUM).toFixed(2).toString());
      const result = await SummarySchema.findOneAndUpdate({
        carId: ctx.request.body.carId
      },
        {
          avaliableLnum,
          avaliableTunnage,
      });

      ctx.body = encryptToJava(JSON.stringify({
        success: true,
        errorMas: '',
        errorCode: '',
        result,
      }));
    }
  }
  async updataOilRecord(ctx) {
    const {_id, ...rest} = ctx.request.body
    // ???????????????????????????
    const resultOrigin = await Oil.findById(_id);
    if (!resultOrigin) { ctx.throw(404, '?????????????????????'); }


    if (ctx.request.body.gasMode === 'divide') {
      const result = await Oil.findByIdAndUpdate(_id, rest);
      if (!result) { ctx.throw(404, '?????????????????????'); }
      ctx.body = encryptToJava(JSON.stringify({
        success: true,
        errorMas: '',
        errorCode: '',
        result,
      }));
      return
    }
    // ?????????????????????????????????
    const findOneSummary = await SummarySchema.findOne({
      carId: ctx.request.body.carId,
    })
    // ???????????????????????????
    if(!findOneSummary?.carId) {
      ctx.body = encryptToJava(JSON.stringify({
        success: false,
        errorMas: '?????????????????????????????????, ????????????????????????',
        errorCode: '',
        result: null,
      }));
      return ;
    } else {
      // ?????????????????? - ?????????????????? ????????????
      let avaliableLnum = (new BigNumber(findOneSummary.avaliableLnum).plus(resultOrigin.oilLnum).toFixed(2).toString());
      const newAvaliableLnum = (new BigNumber(avaliableLnum).minus(ctx.request.body.oilLnum).toNumber());
      if (newAvaliableLnum < 0) {
        ctx.body = encryptToJava(JSON.stringify({
          success: false,
          errorMas: `????????????????????????, ??????????????????${avaliableLnum}???`,
          errorCode: '',
          result: null,
        }));
        return ;
      }
      const avaliableTunnage = (new BigNumber(newAvaliableLnum).div(process.env.DEFAULT_L_NUM).toFixed(2).toString());
      await SummarySchema.findOneAndUpdate({
        carId: ctx.request.body.carId
      },
        {
          avaliableLnum: newAvaliableLnum,
          avaliableTunnage,
      });
      const result = await Oil.findByIdAndUpdate(_id, rest);
      if (!result) { ctx.throw(404, '?????????????????????'); }
      ctx.body = encryptToJava(JSON.stringify({
        success: true,
        errorMas: '',
        errorCode: '',
        result,
      }));
    }
  }
  async delete(ctx) {
    ctx.verifyParams({
      id: { type: 'string', required: true },
    })
    await Oil.findByIdAndRemove(ctx.params.id)
    ctx.status = 204;
  }
}

module.exports = new OilCtl();