module.exports = (app) => {
  const reviews = require("../controllers/review.controller.js");

  const router = require("express").Router();

  router.post("/", reviews.create);
  router.get("/", reviews.findAllReviews);
  router.get("/books", reviews.findAllBooks);
  router.get("/games", reviews.findAllGames);
  router.get("/movies", reviews.findAllMovies);
  router.put("/:id", reviews.update);
  router.delete("/:id", reviews.delete);

  app.use("/api/reviews", router);
};
