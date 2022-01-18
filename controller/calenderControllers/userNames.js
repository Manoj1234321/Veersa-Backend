const calenderModel = require("../../model/calenderModels/calender");
const usersNames = async (req, res) => {
  try {
    await calenderModel
      .find({ date: req.query.date }, { name: 1, userid: 1, _id: 0 })
      .exec((err, docs) => {
        if (err) {
          res.send(err);
        } else {
          if (docs.length === 0) {
            return res.send({
              data: [],
            });
          }
          res.send(docs);
        }
      });
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  usersNames,
};
