import winter from "../images/Winter.jpg";
import spring from "../images/Spring.jpg";
import summer from "../images/Summer.jpg";
import fall from "../images/Fall.jpg";

export function getSeasonBGWallpaper(location) {
  console.log(location, window.location.pathname);
  const seasonPath = (location || window.location).pathname
    .split("/")[1]
    .toUpperCase();

  let currentSeason;
  switch (seasonPath) {
    case "WINTER":
      currentSeason = winter;
      break;
    case "SPRING":
      currentSeason = spring;
      break;
    case "SUMMER":
      currentSeason = summer;
      break;
    case "FALL":
      currentSeason = fall;
      break;
    default:
      currentSeason = winter;
      break;
  }
  return currentSeason;
}
