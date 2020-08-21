const { default: Axios } = require("axios");

const query = ` 
 query ($season:MediaSeason) { Page(page: 1) {
    media(seasonYear: 2020, season: $season, format: TV, sort: SCORE_DESC) {
      id
      description
      popularity
      averageScore
      title {
        english
        romaji
        native
      }
      genres
      season
      seasonYear
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      episodes
      nextAiringEpisode{
        timeUntilAiring
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      externalLinks {
        url
        site
      }
      trailer {
        id
        site
        thumbnail
      }
    }
  }
}
`;

function queryVariables(season) {
  return { variables: { season } };
}
async function getSeasonData(season) {
  return await Axios.post("https://graphql.anilist.co", {
    query,
    ...queryVariables(season),
  }).catch(function (error) {
    console.log(error);
  });
}

module.exports = { getSeasonData };
