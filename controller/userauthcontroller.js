const {
  default: axios
} = require("axios");

let userAuth = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var image = await axios.get(
      "https://graph.microsoft.com/v1.0/me/photo/$value", {
        responseType: "arraybuffer",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const buffer = Buffer.from(image.data, "binary").toString("base64");
    req.dataFromMiddleware1["image"] = buffer;
    res.send(req.dataFromMiddleware1);
  } catch (err) {
    if (err.response.status == 404) {
      req.dataFromMiddleware1["image"] = " ";
      res.status(404).send(req.dataFromMiddleware1);
    }
  }
};

module.exports = {
  userAuth,
};