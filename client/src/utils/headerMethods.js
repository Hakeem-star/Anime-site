export function aggregateGenres(data) {
  const tempArr = [];
  data.forEach((element) => {
    //If there is a genre in the array, add it to the genreSet.
    //Otherwise it'll add undefined to the filters
    if (element.genres.length > 0) {
      return tempArr.push(...element.genres);
    }
  });
  const genreSet = new Set(tempArr);

  return Array.from(genreSet);
}

export function filterByGenre(genre, setData, rawData) {
  if (genre === "None") {
    setData(rawData);
  } else {
    setData(
      rawData.filter((element) => {
        return element.genres.includes(genre);
      })
    );
  }
}

function getCorrectObjectProperty(value, element) {
  if (value === "Name") {
    return element.title.english
      ? element.title.english.toLowerCase()
      : element.title.romaji.toLowerCase();
  }
  if (value === "Popularity") {
    return element.popularity;
  }
  if (value === "Score") {
    return element.averageScore;
  }
}

export function sortAnimePage(direction, value, setData, rawData) {
  let sortedArray = rawData.slice().sort((firstElement, secondElement) => {
    if (
      getCorrectObjectProperty(value, firstElement) <
      getCorrectObjectProperty(value, secondElement)
    ) {
      return -1;
    }
    if (
      getCorrectObjectProperty(value, firstElement) >
      getCorrectObjectProperty(value, secondElement)
    ) {
      return 1;
    }
    return 0;
  });

  if (direction === "desc") {
    sortedArray.reverse();
  }
  setData(sortedArray);
}

export function searchAnimePage(value, setData, rawData) {
  setData(
    rawData.filter((element) => {
      const title = element.title.english
        ? element.title.english.toLowerCase()
        : element.title.romaji.toLowerCase();
      return title.includes(value);
    })
  );
}

// export function filterByGenre(genre,setData,currentData) {
//     if (genre === "None") {
//       setSeasonData(rawSeasonData);
//     } else {
//       setSeasonData(
//         rawSeasonData.filter((element) => {
//           return element.genres.includes(genre);
//         })
//       );
//     }
//   }

//   export function sortAnimePage(direction, value) {
//     function getCorrectObjectProperty(element) {
//       if (value === "Name") {
//         return element.title.english
//           ? element.title.english.toLowerCase()
//           : element.title.romaji.toLowerCase();
//       }
//       if (value === "Popularity") {
//         return element.popularity;
//       }
//       if (value === "Score") {
//         return element.averageScore;
//       }
//     }

//     let sortedArray = rawSeasonData
//       .slice()
//       .sort((firstElement, secondElement) => {
//         if (
//           getCorrectObjectProperty(firstElement) <
//           getCorrectObjectProperty(secondElement)
//         ) {
//           return -1;
//         }
//         if (
//           getCorrectObjectProperty(firstElement) >
//           getCorrectObjectProperty(secondElement)
//         ) {
//           return 1;
//         }
//         return 0;
//       });

//     if (direction === "desc") {
//       sortedArray.reverse();
//     }
//     setSeasonData(sortedArray);
//   }

//   exportfunction searchAnimePage(value) {
//     setSeasonData(
//       rawSeasonData.filter((element) => {
//         const title = element.title.english
//           ? element.title.english.toLowerCase()
//           : element.title.romaji.toLowerCase();
//         return title.includes(value);
//       })
//     );
//   }
