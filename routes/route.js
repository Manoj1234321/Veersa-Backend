const express = require("express");
const app = express();
const middlewares = require("../middleware/userAuthmiddleware");
const controller = require("../controller/controller");
const userAuth = require("../controller/userauthcontroller");
const calender = require("../controller/calender");

app.post('/postdata', controller.postData);
app.get('/me', middlewares.userAuthenticationMiddleware, userAuth.userAuth);
app.post('/calender', middlewares.userAuthenticationMiddleware, calender.store);
app.get('/calender', middlewares.userAuthenticationMiddleware, calender.index);

module.exports = app;