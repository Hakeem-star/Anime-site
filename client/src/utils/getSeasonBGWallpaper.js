import winter from "../images/Winter.jpg";
import spring from "../images/Spring.jpg";
import summer from "../images/Summer.jpg";
import fall from "../images/Fall.jpg";

export function getSeasonBGWallpaper(location) {
  const seasonPath = (location || window.location).pathname
    .split("/")[1]
    .toUpperCase();

  let backgroundImage;
  switch (seasonPath) {
    case "WINTER":
      backgroundImage = winter;
      break;
    case "SPRING":
      backgroundImage = spring;
      break;
    case "SUMMER":
      backgroundImage = summer;
      break;
    case "FALL":
      backgroundImage = fall;
      break;
    default:
      backgroundImage = "";
      break;
  }
  return backgroundImage;
}
