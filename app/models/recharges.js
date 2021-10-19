const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const RechargesSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  nameId: { type: String, required: true },
  carName: { type: String, required: true },
  carId: { type: String, required: true },
  proxyFee: { type: String, required: true },
  chargeTunnage: { type: String, required: true },
  chargeLnum: { type: String, required: true },
  settleName: { type: String, required: true },
  settleStatus: { type: String, required: true },
},{timestamps: true})

module.exports = model('Recharges', RechargesSchema)