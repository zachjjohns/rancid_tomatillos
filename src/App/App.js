import React, { Component } from 'react';
import {getAllMovies, getSingleMovie} from '../API';
import { Switch, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';
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
    } catch (e) {
      this.setState({error: e.message})
    }
  }
  
  returnHome = () => {
    this.componentDidMount();
  }

  render() {
    return (
      <div className="app">
        <NavBar />
          {!!this.state.error && <h2>{this.state.error}</h2>}
          <Switch>
            {this.state.movies.length === 1 && 
            <Route path={`/${this.state.movies.id}`}>
              <SingleMovie movie={this.state.movies} returnHome={this.returnHome}/>
            </Route>}
            {this.state.movies.length > 1 && 
            <Route exact path='/'>
              <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>
            </Route>}
          </Switch>
      </div>
  )}
}


