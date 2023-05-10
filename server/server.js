const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT;

const data = require("./data.json");
app.get("/", function (request, response) {
  response.json(
    "You can use the artist endpoint to retreive data about artists."
  );
});

app.get("/artist", function (request, response) {
  response.json(data);
});

app.listen(PORT, function () {
  console.log("server is listening on PORT " + PORT);
});
