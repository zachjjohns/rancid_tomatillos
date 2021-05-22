describe("Movies Page", () => {
  beforeEach(() => {
    cy.visit('/')
    // cy.fixture('movies.json').then(movieData => {
    //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData.movies});
    // })
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

  it('should display a loading message when retrieving data', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {error: ""})
    cy.visit('/')
    cy.get('h1').contains("BRB, Going to go hydrate the hamster (His name is Napples)")
  });

  it('should display an error message upon a failed fetch', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: [], error: "Oops! Failed to get movie data."})
    cy.visit('/')
    cy.get('h1')
  });
})