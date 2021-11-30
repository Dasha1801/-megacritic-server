module.exports = (app) => {
  const thumbs = require("../controllers/thumb.controller.js");

  const router = require("express").Router();

  router.post("/thumbs", thumbs.createThumbs);
  router.get("/thumbs", thumbs.findThumbs);

  app.use("/api/reviews", router);
};
