const express = require("express");
const app = express();
const middlewares = require("../../middleware/userAuthmiddleware");
const isSuperAdmin = require("../../controller/superAdmin/isSuperAdmin");

app.get(
  "/superadmin",
  middlewares.userAuthenticationMiddleware,
  isSuperAdmin.superAdmin
);

module.exports = app;
