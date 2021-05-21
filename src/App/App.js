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
      movies: null,
      error: '', 
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
    console.log(this.state.movies);
    if(!this.state.error && !this.state.movies) {
      return <h1>BRB Going to go hydrate the hamster(His name is Napples)</h1>
    }
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


