require("dotenv").config();
const axios = require("axios");
const userAuthController = require("../controller/userauthcontroller");
const userAuthenticationMiddleware = async (req, res, next) => {
  if (req.headers.authorization == undefined) {
    return res.send({
      message: " No Token Found",
    });
  }

  const token = req.headers.authorization.split(" ")[1];
  try {
    var responseData = await axios.get(process.env.USER_ACCESS_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    req.dataFromMiddleware1 = responseData.data;
    if (responseData.data.status) res.send("htfug");
    next();
  } catch (err) {
    if (err.response.status == 401) {
      res.send({
        message: " Invalid Access Token",
      });
    }
    res.send(err);
  }
};

module.exports = {
  userAuthenticationMiddleware,
};
