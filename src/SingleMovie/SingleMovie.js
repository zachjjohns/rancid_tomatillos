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
    return (
    <section>
      <div className="banner-container" id={this.state.movie.id}>
        <img className="banner-photo" src={this.state.movie.backdrop_path} alt={`Background banner for ${this.state.movie.title}`}></img>
        <Link to='/' className="return-home"><i className="fas fa-times"></i></Link>
      </div>
      <div className="info">
        <img className="movie-poster" src={this.state.movie.poster_path} alt=" "></img>
        <div className="details-container">
          <h3 className="movie-title">{this.state.movie.title}</h3>
          <p className="movie-overview">{this.state.movie.overview}</p>
          <p className="movie-release">Release Date: {this.state.movie.release_date}</p>
          <p className="movie-genres">Genres: {this.state.movie.genres}</p>
          <p className="movie-rating">Average Rating: {this.state.movie.average_rating}</p>
          <p className="movie-budget">Budget: ${this.state.movie.budget}</p>
          <p className="movie-revenue">Revenue: ${this.state.movie.revenue}</p>
          <p className="movie-runtime">Runtime: {this.state.movie.runtime} minutes</p>
        </div>
      </div>
    </section>
  )}
}