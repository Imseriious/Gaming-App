import React, { Component } from 'react';
import axios from 'axios';
import classes from './TopPC.module.css';
import { connect } from 'react-redux';
import * as actionType from '../../../store/actions';

import GameCard from '../../GameCard/GameCard';

class TopPC extends Component {
    UNSAFE_componentWillMount() {
        this.getTopPc()
    }

    getTopPc() {
        const API_URL = "https://api.newzoo.com/v1.0/pc_player_usage/game/comparison_data?fields=rank,rank_change,title,publisher,genre,player_share,sessions_per_user_per_day,average_playtime_per_day,average_session_time&start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&geo_type=global&limit=5&__permission_set=Game%20Rankings";
        const header = {
            headers: { "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ" }
        }
        axios.get(API_URL, header)
            .then((res) => {
                console.log(res.data.data)
                this.props.topPC(res)
                
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {

        let listOfGames = <h1>Loading Games...</h1>
        if (this.props.topPcState !== null) {
            listOfGames = this.props.topPcState.map(game => (
                <GameCard
                    key={game.title}
                    title={game.title}
                    genre={game.genre}
                />
            ))

        }

        return (
            <div className={classes.TopPC}>
                <h1>Top 5 PC Games</h1>
                <div className={classes.ListOfGames}>
                    {listOfGames}
                </div>
                <a href="/TopPcRanking" className={classes.SeeMore}>See more</a>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        topPC: (res) => dispatch({ type: actionType.TOP_PC, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        topPcState: state.topPC
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPC);