const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const SummarySchema = new Schema({
  leaderName: { type: String, required: true },
  leaderId: { type: String, required: true },
  __v: { type: Number, select: false },
  carName: { type: String, required: true },
  carId: { type: String, required: true },
  totalTunnage: { type: String, required: true },
  avaliableTunnage: { type: String, required: true },
  totalLnum: { type: String, required: true },
  avaliableLnum: { type: String, required: true },
})

module.exports = model('Summary', SummarySchema)