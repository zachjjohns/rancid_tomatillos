import React from 'react'

export default function Movies({ movies }) {

  const movieCards = movies.map(movie => {
    return (
      <movieCard
        img={movie.poster_path}
        title={movie.title}
      />
    )
  })

  return (
    <div>
      {movieCards}
    </div>
  )
}
