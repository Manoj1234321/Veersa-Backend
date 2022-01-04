let calenderSchema = require("../model/calender");

const postData = async (req, res) => {
    try {
        // console.log(" This is the data from the postman", req.body)
        const uniqueId = req.dataFromMiddleware1.id;
        // console.log(" This is the data fromthe middleware 1", req.dataFromMiddleware1)
        let calenderData = await calenderSchema.findOne({
            userid: uniqueId,
            date: req.body.date,
        });
        if (calenderData) {
            console.log(" Data already exists");
            res.send(" Data already exists of this date and id");
        } else {
            var data = req.body;
            var user = new calenderSchema({
                userid: req.dataFromMiddleware1.id,
                mail: req.dataFromMiddleware1.mail,
                name: req.body.name,
                date: req.body.date,
                summary: req.body.summary
            })
            user
                .save()
                .then((result) => {
                    console.log(result)
                    res.send(result);
                })
                .catch((err) => {
                    console.log(" error in posting data", err)
                    res.send(err);
                });

        }
    } catch (err) {
        console.log(" Error in posting Calender data ", err);
        res.send(err);
    }
};
//     calenderSchema.findOne({
//             userid: req.body.userid,
//             date: req.body.date,
//         }),
//         (err, item) => {
//             if (err) {
//                 throw err;
//             }
//             if (item) {
//                 res.send({
//                     message: " Entry is already exist ",
//                 });
//             } else {
//                 var data = req.body;
//                 var user = new calenderSchema(data);
//                 user
//                     .save()
//                     .then((result) => {
//                         res.send(result);
//                     })
//                     .catch((err) => {
//                         res.send(err);
//                     });
//             }
//         }

// };

const getData = async (req, res) => {
    try {
        await calenderSchema.findOne({
            userid: req.body.userid,
            date: req.body.date,
        }).exec((err, docs) => {
            if (err) {
                res.send(err)
            } else {
                res.send(docs)
            }
        });
       
    } catch (err) {
        res.send(err)
    }
};

module.exports = {
    postData,
    getData,
};