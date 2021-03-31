const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gofortDB"
);

const destinationSeed = [
  {
    city: "Denver",
    country: "Colorado",
    visited:
      "An imaginative place of love and light for jah."
  },
  {
    city: "Evergreen",
    country: "Colorado",
    visited:
      "This town will make you bleed trees."
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
