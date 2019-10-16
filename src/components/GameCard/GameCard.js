import React, { Component } from 'react';
import classes from './GameCard.module.css';

import { Link } from 'react-router-dom';

class Game extends Component {
    render() {
        const URI = encodeURIComponent(this.props.title)
        console.log(URI)
        return (
                <Link to={URI} className={classes.GameCard}>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.genre}</h3>
                    <h4>{this.props.hours_viewed}</h4>
                    <h5>{this.props.previous_rank}</h5>
                    <p>{this.props.publisher}</p>
                </Link>
        )
    }
}

export default Game;