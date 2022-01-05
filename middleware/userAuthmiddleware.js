require("dotenv").config();
const axios = require("axios");
const userAuthenticationMiddleware = async (req, res, next) => {
  if (req.headers.authorization == undefined) {
    return res.status(401).send({
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
    next();
  } catch (err) {
    res.status(err.response.status).send({
      message: " Invalid Access Token",
    });
  }
};

module.exports = {
  userAuthenticationMiddleware,
};
