import React from 'react';
import "../styles/Components/SearchMainBar.css";
import { SearchIconSVG } from './Images';
const SearchMainBar = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." />
            <div className='search-icon'>
                {SearchIconSVG({})}
            </div>
        </div>
    );
};

export default SearchMainBar;