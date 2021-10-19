const Oil = require('../models/oil')
const { encryptToJava } = require('../utils/encrypt');
const SummarySchema = require('../models/summary');
const { BigNumber } = require("bignumber.js");


class OilCtl {

  async getAllGasRecords(ctx) {
    const result = await Oil.find();
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentCarOwnerGasRecord(ctx) {
    const result = await Oil.find({
      carId: ctx.state.user.carId,
      carName: ctx.state.user.carName,
    });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentGasSiteRecord(ctx) {
    const result = await Oil.find({
      oilName: ctx.state.user.gasName,
      oilId: ctx.state.user.gasId,
    });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }

  async getCurrentLoginGasRecord(ctx) {
    const result = await Oil.find({
      userId: ctx.state.user._id,
    });
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
      carId: ctx.request.body.carId,
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