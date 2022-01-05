const mongoose = require("mongoose");
const calenderSchema = new mongoose.Schema({
  taskid: {
    type: Number,
    required: true,
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
