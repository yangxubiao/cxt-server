const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const usersSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  freeName: { type: String, required: true },
  freeStatus: { type: String, required: true },
  password: { type: String, required: true, select: false},
  roleName: { type: String, required: true },
  gasMode: { type: String, required: false }, // 加油模式, 针对驾驶员必填
  gasModeName: { type: String, required: false }, // 加油模式, 针对驾驶员必填
  availableLum: { type: String, required: false }, // 可用升数， 针对驾驶员
  roleNo: { type: String, required: true },
  carName: { type: String, required: false },
  carId: { type: String, required: false },
  carProxyFee: { type: String, required: false },
  carNo: { type: String, required: false },
  gasName: { type: String, required: false },
  gasId: { type: String, required: false },
  gasProxyFee: { type: String, required: false },
}, {timestamps: true})

module.exports = model('Users', usersSchema)