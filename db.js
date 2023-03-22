require('dotenv').config();
const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI

const connectToMongo = () => {
  mongoose.connect(mongoUri);
  const db = mongoose.connection;
  db.on("error", (error) => {
    console.log(error);
  });

  db.once("connected", () => {
    console.log("Connected to the database");
  });
};

module.exports = connectToMongo;
