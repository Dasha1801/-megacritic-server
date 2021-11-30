const db = require("../models");
const Comment = db.comments;

exports.createComment = (req, res) => {
  const comment = {
    text: req.body.text,
    reviewId: req.body.reviewId,
  };
  Comment.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};

exports.findComments = (req, res) => {
  Comment.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
};
