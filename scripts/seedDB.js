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
    traveled: false,
    info: "https://images.unsplash.com/photo-1599408169542-620fc453382c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjAwNTl8MHwxfHNlYXJjaHwxfHxkZW52ZXJ8ZW58MHx8fHwxNjE3MzgxMTQ1&ixlib=rb-1.2.1&q=80&w=200"

  },
  {
    city: "London",
    country: "England",
    traveled: true, 
    info: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjAwNTl8MHwxfHNlYXJjaHwxfHxsb25kb258ZW58MHx8fHwxNjE3Mzg4Nzcy&ixlib=rb-1.2.1&q=80&w=200"
    

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
