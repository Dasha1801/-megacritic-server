module.exports = (sequelize, Sequelize) => {
  const Thumb = sequelize.define("thumb", {
    thumbsUp: {
      type: Sequelize.INTEGER,
    },
    thumbsDown: {
      type: Sequelize.INTEGER,
    },
    uid: {
      type: Sequelize.STRING,
    },
    reviewUid: {
      type: Sequelize.STRING,
    },
  });

  return Thumb;
};
