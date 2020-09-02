export function getSeasonBGWallpaper(location) {
  console.log(location, window.location.pathname);
  const seasonPath = (location || window.location).pathname
    .split("/")[1]
    .toUpperCase();

  let currentSeason;
  switch (seasonPath) {
    case "WINTER":
      currentSeason = "/src/images/Winter.jpg";
      break;
    case "SPRING":
      currentSeason = "/src/images/Spring.jpg";
      break;
    case "SUMMER":
      currentSeason = "/src/images/Summer.jpg";
      break;
    case "FALL":
      currentSeason = "/src/images/Fall.jpg";
      break;
    default:
      currentSeason = "/src/images/Winter.jpg";
      break;
  }
  return currentSeason;
}
