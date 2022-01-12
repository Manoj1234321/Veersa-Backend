const express = require("express");
const app = express();
const middlewares = require("../../middleware/userAuthmiddleware");
const userAuth = require("../../controller/userAuthControllers/userAuth");


/**
 * @swagger
 * /v1/me:
 *  get:
 *   summary: get Data of the user's
 *   description: get Data of the user's
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/me', middlewares.userAuthenticationMiddleware, userAuth.userAuth);



module.exports = app;