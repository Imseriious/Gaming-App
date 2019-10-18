import React, { Component } from 'react';
import classes from './GameCard.module.css';

import { Link } from 'react-router-dom';


class Game extends Component {
    render() {
        const hoursViewed = this.props.hours_viewed ? <h4>Hours Viewed: {this.props.hours_viewed}</h4> : null;
        
        

        return (
        <div>
                <Link to={`/game/${this.props.title}`} className={classes.GameCard}>
                    <h1>{this.props.title}</h1>
                    <h3>Category: {this.props.genre}</h3>
                    {hoursViewed}
                </Link>
        </div>
        )
        
    }
}

export default Game;