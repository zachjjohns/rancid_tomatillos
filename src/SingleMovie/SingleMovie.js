import React, { Component } from 'react';
import './SingleMovie.css';
import { Link } from 'react-router-dom';

export default class SingleMovie extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movie = {}
    }
  }

  componentDidMount = async() => {
    try {
      const fetchedMovie = await getSingleMovie(this.props.id);
      this.setState({movie: fetchedMovie.movie});
    } catch (e) {
      this.setState({error: e})
    }
  }


  
  render() {
    return (
    <section>
      <div className="banner-container" id={movie.id}>
        <img className="banner-photo" src={movie.backdrop_path} alt={`Background banner for ${movie.title}`}></img>
        <Link to='/' className="return-home"><i className="fas fa-times"></i></Link>
      </div>
      <div className="info">
        <img className="movie-poster" src={movie.poster_path} alt=" "></img>
        <div className="details-container">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-overview">{movie.overview}</p>
          <p className="movie-release">Release Date: {movie.release_date}</p>
          <p className="movie-genres">Genres: {movie.genres}</p>
          <p className="movie-rating">Average Rating: {movie.average_rating}</p>
          <p className="movie-budget">Budget: ${movie.budget}</p>
          <p className="movie-revenue">Revenue: ${movie.revenue}</p>
          <p className="movie-runtime">Runtime: {movie.runtime} minutes</p>
        </div>
      </div>
    </section>
  )}
}


