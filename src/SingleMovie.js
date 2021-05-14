import React from 'react';
import './SingleMovie.css';

export default function SingleMovie({ movie }) {
  console.log(movie)
  return (
    <div className="banner-container" id={movie[0].id}>
      <img className="banner-photo" src={movie[0].backdrop_path} alt={`Background banner for ${movie[0].title}`}></img>
    <div className="info">
      <img className="movie-poster" src={movie[0].poster_path} alt=" "></img>
      <div className="details-container">
        <h3 className="movie-title">{movie[0].title}</h3>
        <p className="movie-overview">Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!</p>
        <p className="movie-genres">Genre(s): "Drama"</p>
        <p className="movie-rating">Average Rating: {movie[0].average_rating}</p>
        <p className="movie-release">Release Date: {movie[0].release_date}</p>
      </div>
    </div>
    </div>
  )
}
