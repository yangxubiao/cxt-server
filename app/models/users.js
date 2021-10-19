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