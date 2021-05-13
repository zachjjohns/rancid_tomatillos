import React, { Component } from 'react';
import movieData from './movieData';
import Movies from './Movies';
import NavBar from './NavBar';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  displayMovieDetails() {
    console.log("We deed eet")
  }

  render() {
    return (
      <main>
        <header>
          <NavBar/>
        </header>
        <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>
      </main>
    )
  }
}



