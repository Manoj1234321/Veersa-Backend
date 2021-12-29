var UserSchema = require("../model/model");
// console.log(" This is schema ", UserSchema);

const postData = (req, res) => {
  UserSchema.findOne({ token: req.body.token }, (err, item) => {
    if (err) {
      throw err;
    }
    if (item) {
      res.send({ message: " User already exists" });
    } else {
      var data = req.body;
      console.log("data", data);
      var user = new UserSchema(data);
      //     user.uid = data.uid,
      //     user.email = data.email,
      //     user.name = data.name,
      //     user.gender = data.gender,
      //     user.pic = data.pic,
      //    user.token = data.token
      console.log(" This is the user data befoe saving it into database", user);

      user
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(" This is the err ", err);
          res.send(err);
        });
    }
  });
};

module.exports = {
  postData,
};
