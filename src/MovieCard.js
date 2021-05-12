import React from 'react';
import './MovieCard.css';

export default function MovieCard({ img, title, key }) {
  return (
    <div key={key}>
      <img alt=''src={img}></img>
      <h3>{title}</h3>
    </div>
  )
}
