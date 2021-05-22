import React, { Component } from 'react';
import {getSingleMovie } from '../API'
import './SingleMovie.css';
import { Link } from 'react-router-dom';
export default class SingleMovie extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movie: {},
      error: ''
    }
  }
  componentDidMount = async() => {
    try {
      const fetchedMovie = await getSingleMovie(this.props.id);
      this.setState({movie: fetchedMovie.movie});
      this.props.search();
    } catch (e) {
      this.setState({error: e})
    }
  }

  render() {
    if (this.state.movie.title) {
      return (
        <section className="single-movie-container">
          <img className="banner-photo" src={this.state.movie.backdrop_path} alt={`Background banner for ${this.state.movie.title}`}></img>
          <div className="icon-container" id={this.state.movie.id}>
            <Link to='/' className="return-home-button"><i className="fas fa-times"></i></Link>
          </div>
          <div className="info">
            <img className="movie-poster" src={this.state.movie.poster_path} alt=" "></img>
            <div className="title-container">
              <h3 className="movie-title">{this.state.movie.title}</h3>
              <p className="release">Release Date</p>
              <p className="movie-release">{new Date(this.state.movie.release_date).toLocaleDateString()}</p>
              <p className="rating">Average rating</p>
              <p className="movie-rating">{this.state.movie.average_rating.toFixed(2)}</p>
            </div>
            <div className="details-container">
              <p className="overview">Overview</p>
              <p className="movie-overview">{this.state.movie.overview}</p>
              <p className="genres">Genres</p>
              <p className="movie-genres">{this.state.movie.genres.length > 1 ? this.state.movie.genres.map(genre => `${genre} | `): this.state.movie.genres}</p>
              <p className="budget">Budget</p>
              <p className="movie-budget">${this.state.movie.budget.toLocaleString()}</p>
              <p className="revenue">Revenue</p>
              <p className="movie-revenue">${this.state.movie.revenue.toLocaleString()}</p>
              <p className="runtime">Runtime</p>
              <p className="movie-runtime">{this.state.movie.runtime} minutes</p>
            </div>
          </div>
        </section>
      )
    } return null
  }  

}