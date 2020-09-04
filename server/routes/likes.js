const router = require("express").Router();
const graphQLQueries = require("../utils/AnilistGraphQL/graphQLQueries.js");

router.route("/").post((req, res) => {
  //Change the API request based on the url
  //Recommendations
  graphQLQueries
    .getlikedAnimes(req.body.season, req.body.ids)
    .then((response) => {
      res.send(response.data.data.Page.media);
      res.end();
    });
});

module.exports = router;
