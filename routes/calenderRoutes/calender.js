const express = require("express");
const app = express();
const middlewares = require("../../middleware/userAuthmiddleware");
const calender = require("../../controller/calenderControllers/calender");

/**
 * @swagger
 *  components:
 *      schemas:
 *          Pet:
 *              type: object
 *              required:
 *                - pet_type
 *              properties:
 *                pet_type:
 *                  type: string
 *              discriminator:
 *                propertyName: pet_type
 *          Dog:
 *            allOf:
 *              - $ref: '#/components/schemas/Pet'
 *              - type: object
 *                properties:
 *                 date:
 *                   type: string
 *                   example: 12-05-2021
 *          Cat:
 *            allOf:
 *              - $ref: '#components/schemas/Pet'
 *              - type: array
 *                properties:
 *                    taskid:
 *                      type: string
 *                    example: 4
 *                    startTime:
 *                      type: string
 *                      example: 10:10
 *                    endTime:
 *                      type: string
 *                      example: 11:00
 *                    summary:
 *                      type: string
 *                      example: created api for get route
 */

/**
 * @swagger
 * /v1/calender:
 *  post:
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: "#components/schemas/Cat"
 *                - $ref: "#components/schemas/Dog"
 *              discriminator:
 *                propertyName: pet_type
 *      responses:
 *          200:
 *              description: success
 */
app.post("/calender", middlewares.userAuthenticationMiddleware, calender.store);

/**
 * @swagger
 * tags: 
 *  name: Get User's data by Date
 * /v1/calender:
 *  get:
 *   parameters:
 *     - in: query
 *       name: date
 *   summary: get Data of the particular user by date
 *   description: get Data of the user's by date
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get("/calender", middlewares.userAuthenticationMiddleware, calender.index);

module.exports = app;
