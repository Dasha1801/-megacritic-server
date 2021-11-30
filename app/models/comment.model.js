module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    text: {
      type: Sequelize.TEXT,
    },
  });

  return Comment;
};
