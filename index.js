const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 1200;
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const basicAuth = require("express-basic-auth");
const swaggerOptions1 = require("./swagger-one");
const swaggerOptions2 = require("./swagger-two");
const swaggerOptions3 = require("./swagger-three");

const jsDoc1 = swaggerJsdoc(swaggerOptions1);
const jsDoc2 = swaggerJsdoc(swaggerOptions2);
const jsDoc3 = swaggerJsdoc(swaggerOptions3);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
require("./database/db");
const calenderRoute = require("./routes/calenderRoutes/calender");
const meRoute = require("./routes/meRoutes/me");
const superAdmin = require("./routes/superAdmin/isSuperAdmin");
app.use("/v1", meRoute);
app.use("/v1", calenderRoute);
app.use("/v1", superAdmin);

var options = {};

app.use(
  "/api-doc1",
  swaggerUi.serveFiles(jsDoc1, options),
  swaggerUi.setup(jsDoc1)
);
app.use(
  "/api-doc2",
  swaggerUi.serveFiles(jsDoc2, options),
  swaggerUi.setup(jsDoc2)
);
app.use(
  "/api-doc3",
  swaggerUi.serveFiles(jsDoc3, options),
  swaggerUi.setup(jsDoc3)
);

app
  .get("/", (req, res) => {
    res.send({
      message: " Running good",
    });
  })
  .listen(port, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(` Server is running good at port ${port}`);
    }
  });
