const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://megacritic.netlify.app",
  // origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => console.log("re-sync done!"));

require("./app/routes/review.routes")(app);
require("./app/routes/comment.routes")(app);
require("./app/routes/rating.routes")(app);
require("./app/routes/thumb.routes")(app);
require("./app/routes/search.routes")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Yey, your server is running on port ${PORT}`);
});
