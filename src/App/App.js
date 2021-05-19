import React, { Component } from 'react';
import {getAllMovies, getSingleMovie} from '../API';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      singleMovie: {},
    }
  }
  
  componentDidMount = async () => {
    try {
      const fetchedMovies = await getAllMovies();
        this.setState({movies: fetchedMovies.movies});
      } catch (e) {
        this.setState({error: e.message})
      }
  }

  displayMovieDetails = async id => {
    try {
      const fetchedMovie = await getSingleMovie(id);
      this.setState({singleMovie: fetchedMovie.movie});
    } catch (e) {
      this.setState({error: e.message})
    }
  }
  

  render() {
    return (
      <div className="app">
        <NavBar />
          {!!this.state.error && <h2>{this.state.error}</h2>}
          <Switch>
            <Route exact path='/'>
              <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>
            </Route>
            <Route path={`/${this.state.singleMovie.id}`}>
              <SingleMovie movie={this.state.singleMovie}/>
            </Route>
            <Redirect to='/' />
          </Switch>
      </div>
  )}
}



