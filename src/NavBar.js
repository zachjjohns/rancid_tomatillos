import React from 'react';
import "./NavBar.css";

export default function NavBar({returnHome, movieState}) {
  return (
    <header className="navbar">
      <a href="/">Rotten Tomatillos</a>
      <div>
        <input type="search" placeholder="Search Movies"></input>
        <span>UserName</span>
      </div>
      {movieState.length === 1 && <button className="return-home" onClick={() => returnHome()}><i className="fas fa-times"></i></button>}
    </header>
  )
}
