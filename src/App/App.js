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
      search: ''
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

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  removeSearchValue = () => {
    this.setState({search: ''})
  }

  render() {
    if(!this.state.error && !this.state.movies) {
      return <h1>BRB Going to go hydrate the hamster(His name is Napples)</h1>
    }
    return (
      <div className="app">
        <NavBar searchValue={this.state.search} handleChange={this.handleChange} />
          <Switch>
            <Route exact path='/'>
              {!!this.state.error ? <h2>{this.state.error}</h2> :
              <Movies movies={this.state.movies} searchValue={this.state.search}/>}
            </Route>
            <Route exact
            path="/:id"
            render={({ match }) => {
              const id  = match.params.id
              return <SingleMovie id={id} search={this.removeSearchValue}/>}
            }/>
            <Redirect to='/' />
          </Switch>
      </div>
  )}
}  


