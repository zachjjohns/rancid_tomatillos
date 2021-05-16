import React, { Component } from 'react';
import {getAllMovies, getSingleMovie} from './API';
import Movies from './Movies';
import NavBar from './NavBar';
import SingleMovie from './SingleMovie';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }
  
  componentDidMount = async() => {
    let fetchedMovies = [];
    try {
        fetchedMovies = await getAllMovies();
        this.setState({movies: fetchedMovies.movies})
      } catch (e) {
        this.setState({error: e.message})
      }
  }

  displayMovieDetails = async id => {
    let fetchedMovie = [];
    try {
      fetchedMovie = await getSingleMovie(id);
      this.setState({movies: [fetchedMovie.movie]});
      console.log(this.state.movies);
    } catch (e) {
      this.setState({error: e.message})
    }
  }
  // const foundMovie = this.state.movies.filter(movie => movie.id === id);
  // this.setState({movies: foundMovie})
  
  returnHome = () => {
    this.componentDidMount();
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        {!!this.state.error && <h2>{this.state.error}</h2>}
        {this.state.movies.length === 1 && <SingleMovie movie={this.state.movies} returnHome={this.returnHome}/>}
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>}
      </div>
    )
  }
}



