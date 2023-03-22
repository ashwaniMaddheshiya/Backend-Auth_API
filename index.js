const express = require("express");
const mongoose = require("mongoose");
const connectToMongo = require("./db");
const routes = require("./routes/route");

const app = express();

connectToMongo();

app.use(express.json());
app.use("/api", routes);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
