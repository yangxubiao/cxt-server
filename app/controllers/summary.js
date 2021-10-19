const path = require('path');
const { encryptToJava } = require('../utils/encrypt');
const Summary = require('../models/summary')

class SummaryCtl {
  async queryCarOwnerGasInfo(ctx) {
    const result = await Summary.findOne({
      carId: ctx.state.user.carId,
      carName: ctx.state.user.carName,
      leaderName: ctx.state.user.name,
      leaderId: ctx.state.user._id,
    });
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result,
    }));
  }
}

module.exports = new SummaryCtl();