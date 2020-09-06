const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// Heroku - Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Answer API requests.

/////////////////////////////////////
// Get Seasonal Anime Data
const seasons = require("./routes/seasons.js");

app.use("/api/seasons", seasons);
///////////////////////////////////

/////////////////////////////////////
// Get Liked Anime Data
const likes = require("./routes/likes.js");

app.use("/api/likes", likes);
///////////////////////////////////

/////////////////////////////////////
// Get Anime Gifs
const gyfcatGifs = require("./routes/gyfcat.js");

app.use("/api/gyfcat", gyfcatGifs);
///////////////////////////////////

// Heroku - All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
