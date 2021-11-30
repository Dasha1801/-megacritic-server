module.exports = (app) => {
  const ratings = require("../controllers/rating.controller.js");

  const router = require("express").Router();

  router.post("/ratings", ratings.createRating);
  router.get("/ratings", ratings.findRatings);

  app.use("/api/reviews", router);
};
