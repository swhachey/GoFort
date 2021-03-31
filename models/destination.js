const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  city: { type: String, required: true },
  country: { type: String},
  visited: Boolean,
  info: { type: String, required: true }

});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
