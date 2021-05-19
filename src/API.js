// export const getAllMovies = async() => {
//   return (await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")).json();
// }

// export const getSingleMovie = async movieID  => {
//   return (await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)).json();
// }

export const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(errorHandler)
}

export const getSingleMovie = (movieID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
  .then(errorHandler)
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json();
  }
}