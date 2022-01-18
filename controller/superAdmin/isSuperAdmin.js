const calenderModel = require("../../model/calenderModels/calender");
const superAdmin = async (req, res) => {
  try {
    await calenderModel
      .find({
        isSuperAdmin: true,
        date: req.query.date,
      })
      .exec((err, docs) => {
        if (err) {
          res.send(err);
        } else {
          if (docs == null) {
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
  superAdmin,
};
