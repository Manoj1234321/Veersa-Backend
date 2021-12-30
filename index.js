const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 1200;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));
require("./database/db");
const route = require("./routes/route");
app.use("/v1", route);
app
  .get("/", (req, res) => {
    res.send({
      message: " Running good"
    });
  })
  .listen(port, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(` Server is running good at port ${port}`);
    }
  });