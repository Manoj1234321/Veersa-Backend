let calenderSchema = require("../../model/calenderModels/calender");

const store = async (req, res) => {
  try {
    const uniqueId = req.dataFromMiddleware1.id;
    req.body.name = req.dataFromMiddleware1.displayName
    let calenderData = await calenderSchema.findOne({
      userid: uniqueId,
      date: req.body.date,
    });
    if (calenderData) {
      res.status(201).send({
        message: `Data already exists of this date and id`,
      });
    } else {
      var isEmptyObj = !Object.keys(req.body).length;
      if (isEmptyObj) {
        return res.send({
          message: " all the fields are required ",
        });
      }
      (req.body.userid = req.dataFromMiddleware1.id), (array = []);
      req.body.data.forEach((element) => {
        array.push(
          parseFloat(element.startTime.split(":").join(".")).toFixed(2)
        );
        array.push(parseFloat(element.endTime.split(":").join(".")).toFixed(2));
      });
      numbers = array.map(Number);
      for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
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
