import React from 'react'

export default function SingleMovie({ movie }) {
  return (
    <div id={movie[0].id}>
      <img src={movie[0].backdrop_path} alt=" "></img>
      <img src={movie[0].poster_path} alt=" "></img>
      <h3>{movie[0].title}</h3>
      <span>{movie[0].average_rating}</span>
      <span>{movie[0].release_date}</span>
    </div>
  )
}
