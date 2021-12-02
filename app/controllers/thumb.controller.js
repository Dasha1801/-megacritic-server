const db = require("../models");
const Thumbs = db.thumbs;
const { Op } = require("sequelize");

async function getOldThumbs(model, uid, reviewId) {
  const data = await model.findOne({
    where: {
      [Op.and]: [{ uid: uid }, { reviewId: reviewId }],
    },
  });
  return data;
}

exports.createThumbs = async (req, res) => {
  const thumbs = {
    thumbsUp: req.body.thumbsUp,
    thumbsDown: req.body.thumbsDown,
    uid: req.body.uid,
    reviewId: req.body.reviewId,
    reviewUid: req.body.reviewUid,
  };
  const { uid, reviewId } = thumbs;
  const oldThumbs = await getOldThumbs(Thumbs, uid, reviewId);
  if (!oldThumbs) {
    Thumbs.create(thumbs)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(">> Error while creating thumbs: ", err);
      });
  } else {
    Thumbs.update(req.body, {
      where: {
        [Op.and]: [{ uid: uid }, { reviewId: reviewId }],
      },
    });
  }
};


exports.findUserThumbs = (req, res) => {
  const { uid } = req.body;
  Thumbs.findAll({ where: { reviewUid: uid } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding thumbs: ", err);
    });
};
