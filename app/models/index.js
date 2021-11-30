const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reviews = require("./review.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.ratings = require("./rating.model.js")(sequelize, Sequelize);
db.thumbs = require("./thumb.model.js")(sequelize, Sequelize);

db.reviews.hasMany(db.comments, { as: "comments", onDelete: "cascade" });
db.comments.belongsTo(db.reviews, {
  foreignKey: "reviewId",
  as: "review",
  onDelete: "cascade",
});

db.reviews.hasMany(db.ratings, { as: "ratings", onDelete: "cascade" });
db.ratings.belongsTo(db.reviews, {
  foreignKey: "reviewId",
  as: "review",
  onDelete: "cascade",
});

db.reviews.hasMany(db.thumbs, { as: "thumbs", onDelete: "cascade" });
db.thumbs.belongsTo(db.reviews, {
  foreignKey: "reviewId",
  as: "review",
  onDelete: "cascade",
});

module.exports = db;
