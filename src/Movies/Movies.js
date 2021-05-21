import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './movies.css';
export default function Movies({ movies, searchValue }) {
  if(movies){
    const movieCards = movies.map(movie => {
      return (
        <MovieCard
        id={movie.id}
        img={movie.poster_path}
        title={movie.title}
        key={movie.id}
        />
      )
    })
    
    if(searchValue){
      const filteredMovies = movieCards.filter(movie => movie.props.title.toLowerCase().includes(searchValue.toLowerCase()));
      return (
        <main className='movies-display'>
          {!filteredMovies.length && <h1>It looks like no movie match your search. please try a new search</h1>}
          {filteredMovies}
        </main>
      )}

    return (
      <main className='movies-display'>
        {movieCards}
      </main>
    )
  }
  return null
}