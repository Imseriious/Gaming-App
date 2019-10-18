import React from 'react';
import classes from './Search.module.css';

const Search = () => {
    return (
        <div className={classes.Search}>
            <form>
                <input type="text" placeholder="Search Game..." />
                <button>Go!</button>
            </form>
        </div>
    )
}

export default Search;