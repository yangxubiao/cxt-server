
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const OilSchema = new Schema({
  __v: { type: Number, select: false },
  userId: { type: String, required: true },
  phone: { type: String, required: true },
  carNo: { type: String, required: true },
  carName: { type: String, required: true },
  carId: { type: String, required: true },
  carProxyFee: { type: String, required: true },
  gasMode: { type: String, required: false }, // 加油模式, 针对驾驶员必填
  oilName: { type: String, required: true },
  oilId: { type: String, required: true },
  oilProxyFee: { type: String, required: true },
  oilLnum: { type: String, required: true },
  oilImg: { type: String, required: false},
},{timestamps: true})

module.exports = model('Oil', OilSchema)