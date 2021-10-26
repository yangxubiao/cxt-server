const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const OilRecordSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true }, // 加油点负责人姓名
  nameId: { type: String, required: true }, // 加油点负责人 id
  oilName: { type: String, required: true }, // 加油点名称
  oilId: { type: String, required: true }, // 加油点 id
  proxyFee: { type: String, required: true }, // 加油点代加费
  chargeTunnage: { type: String, required: true }, // 充值吨数
  chargeLnum: { type: String, required: true }, // 充值升数 
  settleName: { type: String, required: true }, // 结清名称
  settleStatus: { type: String, required: true }, // 结清状态
},{timestamps: true})

module.exports = model('OilRecord', OilRecordSchema)