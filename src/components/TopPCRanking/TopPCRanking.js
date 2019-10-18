import React, { Component } from 'react';
import axios from 'axios';
import classes from './TopPCRanking.module.css';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import GameCard from '../GameCard/GameCard';

class TopPCRanking extends Component {
    UNSAFE_componentWillMount() {
        this.getTopPcRanking()
    }

    getTopPcRanking() {
        const API_URL = "https://api.newzoo.com/v1.0/pc_player_usage/game/comparison_data?fields=rank,rank_change,title,publisher,genre,player_share,sessions_per_user_per_day,average_playtime_per_day,average_session_time&start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&geo_type=global&limit=50&__permission_set=Game%20Rankings";
        const header = {
            headers: { "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ" }
        }
        axios.get(API_URL, header)
            .then((res) => {
                console.log(res.data.data)
                this.props.topPCRanking(res)
                
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {

        let listOfGames = <h1>Loading Games...</h1>
        if (this.props.topPCRankingState !== null) {
            listOfGames = this.props.topPCRankingState.map(game => (
                <GameCard
                    key={game.title}
                    title={game.title}
                    genre={game.genre}
                />
            ))

        }

        return (
            <div className={classes.TopPCRanking}>
                <h1>Top PC Games</h1>
                <div className={classes.ListOfGames}>
                    {listOfGames}
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        topPCRanking: (res) => dispatch({ type: actionType.TOP_PC_RANKING, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        topPCRankingState: state.topPCRanking
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPCRanking);