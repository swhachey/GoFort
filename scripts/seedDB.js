const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gofortDB"
);

const destinationSeed = [
  {
    city: "Denver",
    country: "United States",
    visited: true,

  },
  {
    city: "London",
    country: "England",
    visited: false, 
    

  }
];

db.Destination
  .remove({})
  .then(() => db.Destination.collection.insertMany(destinationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
