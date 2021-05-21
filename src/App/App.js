import React, { Component } from 'react';
import {getAllMovies} from '../API';
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
  render() {
    return (
      <div className="app">
        <NavBar />
          <Switch>
            <Route exact path='/'>
              {!!this.state.error ? <h2>{this.state.error}</h2> :
              <Movies movies={this.state.movies}/>}
            </Route>
            <Route exact
            path="/:id"
            render={({ match }) => {
              const id  = match.params.id
              return <SingleMovie id={id}/>}
            }/>
            <Redirect to='/' />
          </Switch>
      </div>
  )}
}  


