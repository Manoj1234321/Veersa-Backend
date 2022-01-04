let calenderSchema = require("../model/calender");

const postData =  (req, res) => {
     calenderSchema.findOne({
        userid: req.body.userid,
        date: req.body.date
    }, (err, item) => {
        if (err) {
            throw err;
        }
        if (item) {
            res.send({
                message: " Entry is already exist "
            });
        } else {
            var data = req.body;
            var user = new calenderSchema(data);
            user
                .save()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
    });
};

// const geData = (req,res)=>{
//     calenderSchema.findOne({userid: req.body.userid,
//         date: req.body.date})
// }

module.exports = {
    postData,
};