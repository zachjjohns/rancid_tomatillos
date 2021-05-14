import React from 'react';
import './SingleMovie.css';

export default function SingleMovie({ movie }) {
  console.log(movie)
  return (
    <div className="container" id={movie[0].id}>
      <div className="movie-photos" style={{backgroundImage: `url(${movie[0].backdrop_path})` }}>
        <img className="movie-poster" src={movie[0].poster_path} alt=" "></img>
      </div>
      <div className="info">
        <h3 className="movie-title">{movie[0].title}</h3>
        <span className="movie-rating">{movie[0].average_rating}</span>
        <span className="movie-release">{movie[0].release_date}</span>
      </div>
    </div>
  )
}
