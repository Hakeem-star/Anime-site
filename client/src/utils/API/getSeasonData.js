import Axios from "axios";

export default function getSeasonData(
  setRawSeasonData,
  setAnimeDataReadyState
) {
  const seasons = ["winter", "summer", "spring", "fall"];
  const seasonPath = window.location.pathname.split("/")[1].toUpperCase();
  const matchSeason = (season) => {
    return season.toUpperCase() === seasonPath;
  };
  if (seasons.some(matchSeason)) {
    Axios.get(`/api/seasons/${seasonPath}`)
      .then((res) => {
        setRawSeasonData(res.data);
        setAnimeDataReadyState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
