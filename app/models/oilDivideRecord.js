const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const oilDivideRecordSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  roleName: { type: String, required: true },
  roleNo: { type: String, required: true },
  mode: { type: String, required: false }, // div 扣油， divide , 分油
  lum: { type: String, required: false }, // 升数
  carName: { type: String, required: false },
  carId: { type: String, required: false },
  carProxyFee: { type: String, required: false },
  carNo: { type: String, required: false },
}, {timestamps: true})

module.exports = model('OilDivideRecord', oilDivideRecordSchema)