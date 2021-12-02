module.exports = (app) => {
  const ratings = require("../controllers/rating.controller.js");

  const router = require("express").Router();

  router.post("/ratings", ratings.createRating);
  router.post("/ratingsReview", ratings.findRating);
 
  app.use("/api/reviews", router);
};
