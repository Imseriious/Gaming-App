import React, { Component } from 'react';
import axios from 'axios';

import Game from '../GameCard/GameCard';
import classes from './Gameslist.module.css';

class GamesList extends Component {

    state = {
        listofgames: []
    }

    getGamesData() {
        const API_URL = "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=100&__permission_set=Game%20Rankings";
        const header = {
            headers: { "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ" }
        }
        axios
            .get(API_URL, header)
            .then(res => {
                const gamesdata = res.data.data;
                console.log("GamesData :", gamesdata)
                this.setState({ listofgames: gamesdata })
                console.log("State", this.state.listofgames)
            })


    }

    // 
    componentDidMount() {
        this.getGamesData();
    }

    render() {
        const game = this.state.listofgames.map(game => {
            return (
                <Game
                    key={game.game}
                    title={game.game}
                    genre={game.genre}
                    hours_viewed={game.hours_viewed}
                    previous_rank={game.previous_rank}
                    publisher={game.publisher} />
            )
        })

        return (
            <>
            <h1>Games</h1>
            <div className={classes.GamesList}>
                {game}
            </div>
            </>
        )
    }
}

export default GamesList;
