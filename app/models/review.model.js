module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    uid: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    post: {
      type: Sequelize.TEXT,
    },
    tags: {
      type: Sequelize.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("tags"));
      },
      set: function (val) {
        return this.setDataValue("tags", JSON.stringify(val));
      },
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("image"));
      },
      set: function (val) {
        return this.setDataValue("image", JSON.stringify(val));
      },
    },
  });

  return Review;
};
