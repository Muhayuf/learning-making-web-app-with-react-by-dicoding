import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({onSearch}) {
    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="searchBar">
            <FontAwesomeIcon className="searchIcon" size="xl" icon={faMagnifyingGlass} style={{color: "#61A3BA",}} />
            <input type="text" placeholder="Search my notes..." onChange={onSearchbarChange}/>
        </div>
    );
}

export default SearchBar;