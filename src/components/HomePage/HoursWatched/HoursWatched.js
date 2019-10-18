import React, { Component } from 'react';
import axios from 'axios';
import classes from './HoursWatched.module.css';
import { connect } from 'react-redux';
import * as actionType from '../../../store/actions';

import GameCard from '../../GameCard/GameCard';

class HoursWatched extends Component {
    UNSAFE_componentWillMount() {
        this.getHoursWatched()
    }

    getHoursWatched() {
        const API_URL = "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=5&__permission_set=Game%20Rankings";
        const header = {
            headers: { "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ" }
        }
        axios.get(API_URL, header)
            .then((res) => {
                this.props.hoursWatched(res)
                //console.log(this.props.hWatched)
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {

        let listOfGames = <h1>Loading Games...</h1>

        if (this.props.hWatched !== null) {
            listOfGames = this.props.hWatched.map(game => (
                <GameCard
                    key={game.game}
                    title={game.game}
                    genre={game.genre}
                    hours_viewed={game.hours_viewed}
                />
            ))

        }

        return (
            <div className={classes.HoursWatched}>
                <h1>Top 5 Watched Games</h1>
                <div className={classes.ListOfGames}>
                    {listOfGames}
                </div>
                <a href="/HoursWatchedRanking" className={classes.SeeMore}>See more</a>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        hoursWatched: (res) => dispatch({ type: actionType.HOURS_WATCHED, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        hWatched: state.hoursWatched
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoursWatched);