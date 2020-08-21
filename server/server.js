const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

/////////////////////////////////////
// Get Seasonal Anime Data
const seasons = require("./routes/seasons.js");

app.use("/api/seasons", seasons);
///////////////////////////////////

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
