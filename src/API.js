export const getAllMovies = async() => {
  return (await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")).json();
}

export const getSingleMovie = async movieID  => {
  return (await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)).json();
}
