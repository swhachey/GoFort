const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  visited: Boolean
});

const City = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
