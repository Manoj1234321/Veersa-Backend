const { default: axios } = require("axios");

let userAuth = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var image = await axios.get(
      "https://graph.microsoft.com/v1.0/me/photo/$value",
      {
        responseType: "arraybuffer",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const buffer = Buffer.from(image.data, "binary").toString("base64");
    req.dataFromMiddleware1["image"] = buffer;
    if (req.dataFromMiddleware1.jobTitle == "Software Engineer") {
      req.dataFromMiddleware1["isAdmin"] = false;
      req.dataFromMiddleware1["isviewer"] = true;
    }
    if (req.dataFromMiddleware1.jobTitle == "isAdmin") {
      req.dataFromMiddleware1["isAdmin"] = true;
      req.dataFromMiddleware1["isviewer"] = true;
    }

    res.send(req.dataFromMiddleware1);
  } catch (err) {
    if (err.response.status == 404) {
      req.dataFromMiddleware1["image"] = " ";
      if (req.dataFromMiddleware1.jobTitle == "Software Engineer") {
        req.dataFromMiddleware1["isAdmin"] = false;
        req.dataFromMiddleware1["isviewer"] = true;
      }
      if (req.dataFromMiddleware1.jobTitle == "isAdmin") {
        req.dataFromMiddleware1["isAdmin"] = true;
        req.dataFromMiddleware1["isviewer"] = true;
      }
      res.send(req.dataFromMiddleware1);
    }
  }
};

module.exports = {
  userAuth,
};
