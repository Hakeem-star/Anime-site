const router = require("express").Router();
const graphQLQueries = require("../utils/AnilistGraphQL/graphQLQueries.js");
router.route("/main/:season/:year").get((req, res) => {
  //Change the API request based on the url
  graphQLQueries
    .getSeasonData(req.params.season, req.params.year)
    .then((response) => {
      // console.log(response.data.data.Page.media);
      res.send(response.data.data.Page.media);
      res.end();
    });
});

router.route("/recommendations/:id").get((req, res) => {
  //Change the API request based on the url
  //Recommendations
  graphQLQueries.getAnimeRecommendations(req.params.id).then((response) => {
    res.send(response.data.data.Page.media);
    res.end();
  });
});

router.route("/additional_info/:id").get((req, res) => {
  //Change the API request based on the url
  //Recommendations
  graphQLQueries
    .getAdditionalAnimeInformation(req.params.id)
    .then((response) => {
      res.send(response.data.data.Page.media);
      res.end();
    });
});

module.exports = router;
