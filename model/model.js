const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  pic: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

//  Creating the model

const UserSchema = new mongoose.model("backend", Userschema);

module.exports = UserSchema;
