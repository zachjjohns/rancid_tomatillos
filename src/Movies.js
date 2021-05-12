import React from 'react';
import MovieCard from './MovieCard';
import './movies.css';

export default function Movies({ movies }) {

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

  return (
    <div className='movies-display'>
      {movieCards}
    </div>
  )
}
