
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const OilSchema = new Schema({
  __v: { type: Number, select: false },
  userId: { type: String, required: true },
  carNo: { type: String, required: true },
  carName: { type: String, required: true },
  carId: { type: String, required: true },
  carProxyFee: { type: String, required: true },
  oilName: { type: String, required: true },
  oilId: { type: String, required: true },
  oilProxyFee: { type: String, required: true },
  oilLnum: { type: String, required: true },
  oilImg: { type: String, required: false},
},{timestamps: true})

module.exports = model('Oil', OilSchema)