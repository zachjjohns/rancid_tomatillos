import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

export default function MovieCard({ img, title, id, displayMovieDetails}) {
  return (
    <Link to={`/${id}`} className="movie-card" id={id} onClick={() => displayMovieDetails(id)}>
      <img alt=" " src={img}></img>
      <h3>{title}</h3>
    </Link >
  )
}

