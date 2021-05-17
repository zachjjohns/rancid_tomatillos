import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

export default function MovieCard({ img, title, id, displayMovieDetails}) {
  return (
    <div className="movie-card" id={id} onClick={() => displayMovieDetails(id)}>
      <Link to={`/${id}`}>
        <img alt={`Poster for ${title}`} src={img}></img>
        <h3>{title}</h3>
      </Link >
    </div>
  )
}

