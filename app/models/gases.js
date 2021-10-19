const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const gasesSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  proxyFee: { type: String, required: true },
},{timestamps: true})

module.exports = model('Gases', gasesSchema)