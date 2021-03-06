const mongoose = require("mongoose");
const calenderSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  isSuperAdmin: {
    type: Boolean,
    default: true,
  },
  userid: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  data: [
    {
      taskid: String,
      startTime: String,
      endTime: String,
      summary: String,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

//  Creating the model

let Calender = new mongoose.model("Calender", calenderSchema);

module.exports = Calender;
