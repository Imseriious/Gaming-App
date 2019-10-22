import React, { Component } from 'react';
//Axios-Redux
import axios from 'axios';
import {mostWatchedGamesRankingUrl, headers} from '../../../axios/axios';
import { connect } from 'react-redux';
import * as actionType from '../../../store/actions';
//Components:
import GameCard from '../../GameCard/GameCard';
//Styles:
import {
    StyledContainer, 
    StyledListOfGames,
    StyledTitle
}from '../../StyledComponents/Rankings/styledRankings';

//Component:
class HoursWatchedRanking extends Component {
    componentDidMount() {
        this.getTopPcRanking()
    }

    getTopPcRanking() {
        axios.get(mostWatchedGamesRankingUrl, headers)
            .then((res) => {
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
            <>
            <StyledTitle>Most Viewed Games👀</StyledTitle>
            <StyledContainer>
                <StyledListOfGames>
                    {listOfGames}
                </StyledListOfGames>
            </StyledContainer>
            </>
        )
    }

}

//React-Redux
const mapDispatchToProps = dispatch => {
    return {
        hoursWatchedRanking: (res) => dispatch({ type: actionType.TOP_HOURS_WATCHED_RANKING, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        hoursWatchedRankingState: state.hoursWatchedRanking
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoursWatchedRanking);