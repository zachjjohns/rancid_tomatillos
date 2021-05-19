describe("Movies Page", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('movies.json').then(movieData => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData.movies});
    })
  })

  it('should render a NavBar component containing the app name', () => {
    cy.get('header').contains('Rotten Tomatillos')
  });

  it('should render a main section to contain movie card components', () => {
    cy.get('main')
  });

  it('should have movie cards with the movie poster and title', () => {
    cy.get('img') 
      .get('h3')   
  });

  it('should display an error upon a failed fetch request', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {error: "Failed to fetch"})
    cy.visit('/')
  });
})