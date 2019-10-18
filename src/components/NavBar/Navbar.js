import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../assets/newzoo-logo.svg';

const Navbar = () => {
    return(
        <div className={classes.Navbar}>
            <a href="/"><img src={Logo} className={classes.Logo}/></a>
            <h1 className={classes.NightMode}>NightMode</h1>
            <div className={classes.Options}>
                <a href="/TopPcRanking">Top PC Games</a><span> | </span><a href="/HoursWatchedRanking">Most Viewed Games</a>
            </div>
        </div>
    )
}

export default Navbar;