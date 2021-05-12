import React, { Component } from 'react';
import movieData from './movieData';
import Movies from './Movies';
import movieCard from './movieCard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }
  render() {
    return (
      <main>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}



