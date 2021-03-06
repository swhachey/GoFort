const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  city: { type: String, required: true },
  country: { type: String },
  traveled: { type:Boolean, default: false },
  info: { type: String }

});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
