import React from "react";
import SearchBar from "./SearchBar" 

function Header({onSearch}) {
  return (
    <header>
        <h1>Personal Notes App by <span>MUHAYUF</span></h1>
        <SearchBar onSearch={onSearch}/>
    </header>
  );
}

export default Header;