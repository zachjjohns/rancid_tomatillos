import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

export default function MovieCard({ img, title, id}) {
  return (
    <Link to={`/${id}`} className="movie-card" id={id}>
      <img alt="Poster for {title}" src={img}></img>
      <h3>{title}</h3>
    </Link >
  )
}