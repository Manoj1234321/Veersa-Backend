let calenderSchema = require("../../model/calenderModels/calender");

const store = async (req, res) => {
  try {
    const uniqueId = req.dataFromMiddleware1.id;
    let calenderData = await calenderSchema.findOne({
      userid: uniqueId,
      date: req.body.date,
    });
    if (calenderData) {
      res.status(201).send({
        message: `Data already exists of this date and id`,
      });
    } else {
      (req.body.userid = req.dataFromMiddleware1.id), (array = []);
      req.body.data.forEach((element) => {
        array.push(
          parseFloat(element.startTime.split(":").join(".")).toFixed(2)
        );
        array.push(parseFloat(element.endTime.split(":").join(".")).toFixed(2));
      });
      for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          return res.send({
            message: " Start time cannot be greater than end time",
          });
        }
      }
      calenderSchema.insertMany(req.body, (err, docs) => {
        if (err) {
          console.log(err);
          res.send(err);
        }
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
  store,
  index,
};
