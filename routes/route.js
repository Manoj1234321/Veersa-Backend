const express = require("express");
const app = express();
const middlewares = require("../middleware/userAuthmiddleware");
const controller = require("../controller/controller");
const userAuth = require("../controller/userauthcontroller");

app.post("/postdata", controller.postData);
app.get("/me", middlewares.userAuthenticationMiddleware, userAuth.userAuth);

module.exports = app;