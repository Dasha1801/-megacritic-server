module.exports = (app) => {
  const comments = require("../controllers/comment.controller.js");

  const router = require("express").Router();

  router.post("/comments", comments.createComment);
  router.post("/allComments", comments.findComments);

  app.use("/api/reviews", router);
};

