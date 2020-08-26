export default function filterSeasonData(
  filterTerm,
  setSeasonData,
  rawSeasonData
) {
  //Filter by the filterterm
  setSeasonData((seasonData) => {
    console.log(filterTerm, seasonData, rawSeasonData);
    return rawSeasonData.filter((data) =>
      data.genres.some((val) => val === filterTerm)
    );
  });
}
