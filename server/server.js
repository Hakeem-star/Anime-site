const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../src/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

/////////////////////////////////////
// Get Seasonal Anime Data
const seasons = require("./routes/seasons.js");

app.use("/api/seasons", seasons);
///////////////////////////////////

/////////////////////////////////////
// Get Anime Gifs
const gyfcatGifs = require("./routes/gyfcat.js");

app.use("/api/gyfcat", gyfcatGifs);
///////////////////////////////////

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
