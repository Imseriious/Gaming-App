import React, { Component } from 'react';
import axios from 'axios';
import classes from './HoursWatchedRanking.module.css';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import GameCard from '../GameCard/GameCard';

class HoursWatchedRanking extends Component {
    UNSAFE_componentWillMount() {
        this.getTopPcRanking()
    }

    getTopPcRanking() {
        const API_URL = "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=50&__permission_set=Game%20Rankings";
        const header = {
            headers: { "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ" }
        }
        axios.get(API_URL, header)
            .then((res) => {
                console.log(res.data.data)
                this.props.hoursWatchedRanking(res)
                
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {

        let listOfGames = <h1>Loading Games...</h1>
        if (this.props.hoursWatchedRankingState !== null) {
            listOfGames = this.props.hoursWatchedRankingState.map(game => (
                <GameCard
                    key={game.game}
                    title={game.game}
                    genre={game.genre}
                />
            ))

        }

        return (
            <div className={classes.HoursWatchedRanking}>
                <h1>Most Watched</h1>
                <div className={classes.ListOfGames}>
                    {listOfGames}
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        hoursWatchedRanking: (res) => dispatch({ type: actionType.HOURS_WATCHED_RANKING, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        hoursWatchedRankingState: state.hoursWatchedRanking
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoursWatchedRanking);