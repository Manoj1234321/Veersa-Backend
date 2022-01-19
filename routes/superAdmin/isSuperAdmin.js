const express = require("express");
const app = express();
const middlewares = require("../../middleware/userAuthmiddleware");
const isSuperAdmin = require("../../controller/superAdmin/isSuperAdmin");

/**
 * @swagger
 * tags:
 *  name: Get User's Data
 * /v1/superadmin:
 *  get:
 *   parameters:
 *     - in: query
 *       name: date
 *   summary: Get User's Data
 *   description: Get User's Data
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */

app.get(
  "/superadmin",
  middlewares.userAuthenticationMiddleware,
  isSuperAdmin.superAdmin
);

module.exports = app;
