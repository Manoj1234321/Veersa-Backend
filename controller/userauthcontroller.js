let userAuth = async (req, res) => {
  res.send(req.dataFromMiddleware1);
};


module.exports = {
  userAuth,
};
