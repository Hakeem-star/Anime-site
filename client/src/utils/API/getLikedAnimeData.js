import Axios from "axios";

export default function getLikedAnimeData(
  setRawLikedAnimeData,
  ids,
  setAnimeDataReadyState
) {
  const seasons = ["winter", "summer", "spring", "fall", "all"];
  //Use All if no additional path
  const seasonPath = (
    window.location.pathname.split("/")[2] || "ALL"
  ).toUpperCase();
  const matchSeason = (season) => {
    return season.toUpperCase() === seasonPath;
  };
  if (seasons.some(matchSeason)) {
    Axios.post(`/api/likes`, { ids, season: seasonPath })
      .then((res) => {
        setAnimeDataReadyState(true);
        setRawLikedAnimeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
