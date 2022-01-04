const mongoose = require("mongoose");
const calenderSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
 date: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: true,
  },
  created_at : {
       type: Date ,
       default: Date.now
    }
 
  
});

//  Creating the model

let Calender = new mongoose.model("Calender", calenderSchema);

module.exports = Calender;
