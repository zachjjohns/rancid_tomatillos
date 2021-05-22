describe('Single Movie View', () => {
  beforeEach(() => {
    cy.visit('/')
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
  })

  it('should contain a banner photo', () => {
    cy.get('.banner-photo')
  });

  it('should contain a poster image of the movie', () => {
    cy.get('.movie-poster')
  });

  
  it('should be render specific movie details', () => {
    cy.get('section').contains("Release Date:")
      .get('section').contains("Genres:")
      .get('section').contains("Average Rating:")
      .get('section').contains("Budget:")
      .get('section').contains("Revenue:")
      .get('section').contains("Runtime:")
  });
  
  it('should have a button to close details and return to the main page', () => {
    cy.get('i').click()
      .url().should('eq', 'http://localhost:3000/')
  });
})