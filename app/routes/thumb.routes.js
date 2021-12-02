module.exports = (app) => {
  const thumbs = require("../controllers/thumb.controller.js");

  const router = require("express").Router();

  router.post("/thumbs", thumbs.createThumbs);
  router.post("/userThumbs", thumbs.findUserThumbs);

  app.use("/api/reviews", router);
};
