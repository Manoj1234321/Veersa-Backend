let calenderSchema = require("../../model/calenderModels/calender");

const store = async (req, res) => {
  try {
    const uniqueId = req.dataFromMiddleware1.id;
    let calenderData = await calenderSchema.findOne({
      userid: uniqueId,
      date: req.body.date,
    });
    if (calenderData) {
      res
        .status(201)
        .send({ message: `Data already exists of this date and id` });
    } else {
      (req.body.userid = req.dataFromMiddleware1.id),
        calenderSchema.insertMany(req.body, (err, docs) => {
          if (err) {
            console.log(err);
            res.send(err);
          }
          console.log(docs);
          res.status(201).send({
            success: true,
          });
        });
    }
  } catch (err) {
    res.status(201).send(err);
  }
};

const index = async (req, res) => {
  try {
    await calenderSchema
      .findOne({
        date: req.query.date,
      })
      .exec((err, docs) => {
        if (err) {
          res.send(err);
        } else {
          if (docs == null) {
            return res.send({ data: [] });
          }

          res.send(docs);
        }
      });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  store,
  index,
};
