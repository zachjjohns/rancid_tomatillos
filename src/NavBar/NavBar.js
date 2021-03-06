import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

export default function NavBar({ searchValue, handleChange }) {
  return (
    <header className="navbar">
      <Link to="/">Rancid Tomatillos</Link>
      <input type="search"
      placeholder="Search Movies"
      value={searchValue} 
      onChange={(event) => handleChange(event)}/>
    </header>
  )
}
