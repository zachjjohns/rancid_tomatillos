describe("Movies Page", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render a NavBar component containing the app name', () => {
    cy.fixture('movies.json').then(movieData => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData.movies});
    })
    cy.get('header').contains('Rotten Tomatillos')
  });

  it('should render a main section to contain movie card components', () => {
    cy.fixture('movies.json').then(movieData => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData.movies});
    })
    cy.get('main')
  });

  it('should have movie cards with the movie poster and title', () => {
    cy.fixture('movies.json').then(movieData => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData.movies});
    })
    cy.get('img') 
      .get('h3')   
  });

  it('should have a search bar that filters movie cards by title', () => {
    cy.get('input[type=search]').type('Peninsula')
      .get('#581392')
  })

  it('should display a message when no movies match search criteria', () => {
    cy.get('input[type=search]').type('Fig Newton Party')
      .get('h1').contains("It looks like no movies match your search. Please try a new search.")
  })

  it('should display a loading message when retrieving data', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {error: ""})
      .visit('/')
      .get('h1').contains("Loading....")
  });

  it('should take the user to a specific movie\'s details when clicking on the respective card', () => {
    cy.get('main').get('#400160').click()
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/400160', {
      "id": 400160,
      "title": "The SpongeBob Movie: Sponge on the Run",
      "poster_path": "https://image.tmdb.org/t/p/original//gxK2lB1w8an5ViPXzisDsRsyHr0.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//bt4xA9WZE9P1wiRILRFt0Zh2wmV.jpg",
      "release_date": "2020-08-14",
      "overview": "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
      "genres": [
        "Fantasy",
        "Animation",
        "Adventure",
        "Comedy",
        "Family"
      ],
      "budget": 0,
      "revenue": 0,
      "runtime": 91,
      "tagline": "A Huge Journey to Find a Tiny Friend",
      "average_rating": 5.2
    })
    cy.url().should('eq', 'http://localhost:3000/400160')
  })

  it('should display an error message upon a failed fetch', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 404})
      .visit('/')
      .get('h1').contains("Oops! Failed to get movie data.")
  });

  it('should display an error message upon a 500 status error', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 500})
      .visit('/')
      .get('h1').contains("Oops! Failed to get movie data.")
  });
})