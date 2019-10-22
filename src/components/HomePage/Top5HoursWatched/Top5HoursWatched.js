import React, { Component } from 'react';
//Axios-Redux
import axios from 'axios';
import { mostWatched5GamesUrl, headers } from '../../../axios/axios';
import { connect } from 'react-redux';
import * as actionType from '../../../store/actions';
//Components:
import GameCard from '../../GameCard/GameCard';
//Styles:
import {
    StyledContainer,
    StyledListOfGames,
    StyledSeeMoreLink,
    StyledTitle,
    StyledListInfo
} from '../../StyledComponents/HomePage/StyledContainers/StyledContainers';

//Component:
class Top5HoursWatched extends Component {
    componentDidMount() {
        this.getHoursWatched()
    }

    getHoursWatched() {
        axios.get(mostWatched5GamesUrl, headers)
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
                    hoursViewed={game.hours_viewed}
                />
            ))

        }

        return (
            <StyledContainer>
                <StyledListInfo >
                    <StyledTitle>Most Viewed Games</StyledTitle>
                    <StyledSeeMoreLink to="/HoursWatchedRanking" >See more...</StyledSeeMoreLink>
                </StyledListInfo>
                <StyledListOfGames>
                    {listOfGames}
                </StyledListOfGames>
            </StyledContainer>
        )
    }

}

//React-Redux
const mapDispatchToProps = dispatch => {
    return {
        hoursWatched: (res) => dispatch({ type: actionType.TOP_5_HOURS_WATCHED, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        hWatched: state.top5HoursWatched
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top5HoursWatched);