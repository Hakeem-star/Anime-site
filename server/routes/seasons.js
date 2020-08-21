const router = require("express").Router();
const graphQLQueries = require("../utils/AnilistGraphQL/graphQLQueries.js");
router.route("/WINTER").get((req, res) => {
  graphQLQueries.getSeasonData("WINTER").then((response) => {
    // console.log(response.data.data.Page.media);
    res.send(response.data.data.Page.media);
    res.end();
  });
});

module.exports = router;
