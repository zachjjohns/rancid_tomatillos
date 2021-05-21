export const getAllMovies = async () => {
  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
  const data = await errorHandler(response);
  
  return data;
}

export const getSingleMovie = async movieID => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
  const data = await errorHandler(response);
  
  return data;
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}