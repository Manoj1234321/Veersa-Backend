var UserSchema = require("../model/model");

const postData = (req, res) => {
  UserSchema.findOne({ token: req.body.token }, (err, item) => {
    if (err) {
      throw err;
    }
    if (item) {
      res.send({ message: " User already exists" });
    } else {
      var data = req.body;
      var user = new UserSchema(data);
      //     user.uid = data.uid,
      //     user.email = data.email,
      //     user.name = data.name,
      //     user.gender = data.gender,
      //     user.pic = data.pic,
      //    user.token = data.token
      user
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
};

module.exports = {
  postData,
};
