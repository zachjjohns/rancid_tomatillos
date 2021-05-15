// const route = "https://rancid-tomatillos.herokuapp.com/api/v2"
// const checkForError = (response) => {
//   if (!response.ok) {
//     throw new Error("Error: Unable to find movie data")
//   } else {
//     return response.json();
//   }
// }

export const getAllMovies = async() => {
 return (await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")).json();
  // if (!response.ok) {
  //   throw new Error("Error: Unable to find movie data")
  // }
  // const movieData = await response.json();
  // return movieData
}

