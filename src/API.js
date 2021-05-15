const route = "https://rancid-tomatillos.herokuapp.com/api/v2"
const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}


const getAllMovies = () => {
  return fetch(route+"/movies")
    .then(response => response.json)
}

export {getAllMovies, } 

//  	/movies