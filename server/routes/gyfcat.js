const { default: Axios } = require("axios");
const util = require("util");

const router = require("express").Router();
router.route(`${/anime/}:anime`).get((req, res) => {
  console.log(req);
  Axios.get(
    `https://api.gfycat.com/v1/gfycats/search?search_text=${req.params.anime}&count=100&start=0`
  ).then((result) => {
    console.log(req.params.anime);

    res.send(result.data);
  });
});

module.exports = router;

//   Axios.get(`https://api.gfycat.com/v1/gfycats/search?search_text=${}`,{
//     "grant_type":"client_credentials",
//     "client_id":process.env.GYCAT_CLIENT_ID,
//     "client_secret":process.env.GYCAT_CLIENT_SECRET
//   });
