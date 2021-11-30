module.exports = (app) => {
  const comments = require("../controllers/comment.controller.js");

  const router = require("express").Router();

  router.post("/comments", comments.createComment);
  router.get("/comments", comments.findComments);

  app.use("/api/reviews", router);
};
