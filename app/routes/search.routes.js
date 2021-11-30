module.exports = (app) => {
  const search = require("../controllers/search.controller.js");

  const router = require("express").Router();

  router.post("/search", search.findAllWords);

  app.use("/api/reviews", router);
};
