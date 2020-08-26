const { default: Axios } = require("axios");

const seasonDataQuery = ` 
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
      relations {
        nodes{
          title {
            romaji
            english
          }
        }
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

async function getSeasonData(season) {
  return await Axios.post("https://graphql.anilist.co", {
    query: seasonDataQuery,
    variables: { season },
  }).catch(function (error) {
    console.log(error);
  });
}

const animeRecommendationsQuery = `
query ($id:Int ){ 
  Page(page: 1) {
    media(id: $id sort:POPULARITY_DESC) {
      id
      recommendations {
        nodes {
          mediaRecommendation {
            coverImage {
              medium
              color
            }
            externalLinks {
              url
              site
              
            }
            popularity
            title {
              romaji
              english
              native
              userPreferred
            }
          }
        }
      }
    }
  }
}
`;

async function getAnimeRecommendations(id) {
  return await Axios.post("https://graphql.anilist.co", {
    query: animeRecommendationsQuery,
    variables: { id },
  }).catch(function (error) {
    console.log(error);
  });
}
module.exports = { getSeasonData, getAnimeRecommendations };
