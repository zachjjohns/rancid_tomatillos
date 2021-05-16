import React from 'react';
import './SingleMovie.css';

export default function SingleMovie({ movie, returnHome }) {
  console.log(movie)
  return (
    <div>
      <div className="banner-container" id={movie[0].id}>
        <img className="banner-photo" src={movie[0].backdrop_path} alt={`Background banner for ${movie[0].title}`}></img>
        <button className="return-home" onClick={() => returnHome()}><i className="fas fa-times"></i></button>
      </div>
      <div className="info">
        <img className="movie-poster" src={movie[0].poster_path} alt=" "></img>
        <div className="details-container">
          <h3 className="movie-title">{movie[0].title}</h3>
          <p className="movie-overview">{movie[0].overview}</p>
          <p className="movie-release">Release Date: {movie[0].release_date}</p>
          <p className="movie-genres">Genres: {movie[0].genres.map(genre => genre + " | ")}</p>
          <p className="movie-rating">Average Rating: {movie[0].average_rating}</p>
          <p className="movie-budget">Budget: ${movie[0].budget}</p>
          <p className="movie-revenue">Revenue: ${movie[0].revenue}</p>
          <p className="movie-runtime">Runtime: {movie[0].runtime} minutes</p>
        </div>
      </div>
    </div>
  )
}
