require("dotenv").config();
const axios = require("axios");
const userAuthController = require("../controller/userauthcontroller");
const userAuthenticationMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    var responseData = await axios.get(process.env.USER_ACCESS_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    req.dataFromMiddleware1 = responseData.data;
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  userAuthenticationMiddleware,
};
