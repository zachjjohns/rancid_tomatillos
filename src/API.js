const route = "https://rancid-tomatillos.herokuapp.com/api/v2"
const checkForError = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json();
  }
}

const getAllMovies = () => {
  return fetch(route+"/movies")
    .then(checkForError())
}

export {getAllMovies, } 