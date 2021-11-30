const db = require("../models");
const Review = db.reviews;
const { Op } = require("sequelize");

exports.findAllWords = (req, res) => {
  let { term } = req.body;
  Review.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.like]: "%" + term + "%",
          },
        },
        {
          post: {
            [Op.like]: "%" + term + "%",
          },
        },
        {
          tags: {
            [Op.like]: "%" + term + "%",
          },
        },
      ],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reviews.",
      });
    });
};
