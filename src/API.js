export const getAllMovies = async() => {
 return (await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")).json();
}

