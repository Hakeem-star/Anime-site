const router = require("express").Router();
const graphQLQueries = require("../utils/AnilistGraphQL/graphQLQueries.js");
router.route(/\/(WINTER|SUMMER|FALL|SPRING)/i).get((req, res) => {
  //Change the API request based on the url
  graphQLQueries.getSeasonData(req.params[0]).then((response) => {
    // console.log(response.data.data.Page.media);
    res.send(response.data.data.Page.media);
    res.end();
  });
});

router.route("/reviews/:id").get((req, res) => {
  //Change the API request based on the url
  //Recommendations
  graphQLQueries.getAnimeRecommendations(req.params.id).then((response) => {
    res.send(response.data.data.Page.media);
    res.end();
  });
});

module.exports = router;
