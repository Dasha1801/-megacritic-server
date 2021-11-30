const db = require("../models");
const Review = db.reviews;
const { Op } = require("sequelize");

exports.create = (req, res) => {
  const review = {
    uid: req.body.uid,
    category: req.body.category,
    title: req.body.title,
    post: req.body.post,
    tags: req.body.tags,
    rating: req.body.rating,
    image: req.body.image,
  };

  Review.create(review)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Review.",
      });
    });
};

exports.findAllReviews = (req, res) => {
  Review.findAll({
    where: {},
    order: [["updatedAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};

exports.findAllBooks = (req, res) => {
  Review.findAll({
    where: {
      category: {
        [Op.eq]: "books",
      },
    },
    order: [["updatedAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};

exports.findAllGames = (req, res) => {
  Review.findAll({
    where: {
      category: {
        [Op.eq]: "games",
      },
    },
    order: [["updatedAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};

exports.findAllMovies = (req, res) => {
  Review.findAll({
    where: {
      category: {
        [Op.eq]: "movies",
      },
    },
    order: [["updatedAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Review.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Review was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Review with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Review.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Review was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Review with id=${id}. Maybe Review was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Review with id=" + id,
      });
    });
};
