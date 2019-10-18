import React, { Component } from 'react';
import classes from './HomePage.module.css';

import HoursWatched from './HoursWatched/HoursWatched';
import TopPC from './TopPC/TopPC';


class HomePage extends Component {
    render() {

        return (
            <div className={classes.HomePage}>
                <HoursWatched />
                <TopPC />
            </div>
        )
    }
}

export default HomePage;
