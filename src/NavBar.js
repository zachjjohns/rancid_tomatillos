import React from 'react';
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <a href="/">Rotten Tomatillos</a>
      <div>
        <input type="search" placeholder="Search Movies"></input>
        <span>UserName</span>
      </div>
    </div>
  )
}
