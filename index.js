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
const calenderRoute = require("./routes/calenderRoutes/calender");
const meRoute = require("./routes/meRoutes/me");

app.use("/v1", calenderRoute);
app.use("/v1", meRoute);

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