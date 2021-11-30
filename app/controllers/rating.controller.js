const db = require("../models");
const Rating = db.ratings;
const { Op } = require("sequelize");

async function getOldRating(model, uid, reviewId) {
  const data = await model.findOne({
    where: {
      [Op.and]: [{ uid: uid }, { reviewId: reviewId }],
    },
  });
  return data;
}

exports.createRating = async (req, res) => {
  const rating = {
    rating: req.body.rating,
    uid: req.body.uid,
    reviewId: req.body.reviewId,
  };
  const { uid, reviewId } = rating;
  const oldRating = await getOldRating(Rating, uid, reviewId);
  if (!oldRating) {
    Rating.create(rating)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(">> Error while creating rating: ", err);
      });
  } else {
    Rating.update(req.body, {
      where: {
        [Op.and]: [{ uid: uid }, { reviewId: reviewId }],
      },
    });
  }
};

exports.findRatings = (req, res) => {
  Rating.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding rating: ", err);
    });
};
