import React, { Component } from 'react';
import movieData from './movieData';
import Movies from './Movies';
import NavBar from './NavBar';
import SingleMovie from './SingleMovie';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  displayMovieDetails = (id) => {
    const foundMovie = this.state.movies.filter(movie => movie.id === id);
    this.setState({movies: foundMovie})
  }

  returnHome = () => {
    this.setState({movies: movieData.movies});
  }

  render() {
    return (
      <div className="app">
        <NavBar returnHome={this.returnHome} movieState={this.state.movies}/>
        {this.state.movies.length === 1 && <SingleMovie movie={this.state.movies}/>}
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>}
      </div>
    )
  }
}



