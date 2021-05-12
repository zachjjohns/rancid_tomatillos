import React from 'react';
import MovieCard from './MovieCard';

export default function Movies({ movies }) {

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        img={movie.poster_path}
        title={movie.title}
      />
    )
  })

  return (
    <div>
      {movieCards}
    </div>
  )
}
