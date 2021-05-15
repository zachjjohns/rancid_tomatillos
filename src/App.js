import React, { Component } from 'react';
import {getAllMovies} from './API';
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
        this.setState({error: "Error: could not retrieve movie data"})
      }
  }

  displayMovieDetails = (id) => {
    const foundMovie = this.state.movies.filter(movie => movie.id === id);
    this.setState({movies: foundMovie})
  }

  returnHome = () => {
    this.componentDidMount();
  }

  render() {
    console.log(getAllMovies())
    return (
      <div className="app">
        <NavBar returnHome={this.returnHome} movieState={this.state.movies}/>
        {this.state.movies.length === 1 && <SingleMovie movie={this.state.movies}/>}
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>}
      </div>
    )
  }
}



