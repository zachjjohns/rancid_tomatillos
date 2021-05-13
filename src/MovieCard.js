import React from 'react';
import './MovieCard.css';

export default function MovieCard({ img, title, id, displayMovieDetails}) {
  return (
    <div className="movie-card" id={id} onClick={() => displayMovieDetails(id)}>
      <img alt=" " src={img}></img>
      <h3>{title}</h3>
    </div>
  )
}

