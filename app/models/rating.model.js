module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    rating: {
      type: Sequelize.INTEGER,
    },
    uid: {
      type: Sequelize.STRING,
    },
  });

  return Rating;
};
