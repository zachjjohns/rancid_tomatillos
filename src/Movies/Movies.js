import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './movies.css';
export default function Movies({ movies }) {
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
      return (
        <main className='movies-display'>
        {movieCards}
      </main>
    )
  }
  return null
}