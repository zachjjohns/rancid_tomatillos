import React from 'react';
import './MovieCard.css';

export default function MovieCard({ img, title, id}) {
  return (
    <div className="movie-card" id={id}>
      <img alt=" " src={img}></img>
      <h3>{title}</h3>
    </div>
  )
}
