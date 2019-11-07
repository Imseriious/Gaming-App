import React, { Component } from 'react';
//React-Redux:
import { connect } from 'react-redux';
//Components:
import GameCard from '../GameCard/GameCard';
//Styles:
import {
    StyledTitle,
    StyledContainer,
    StyledNotSavedGames,
    StyledMainContainer

} from '../StyledComponents/SavedGames/SavedGames';

//Component:
class SavedGames extends Component {

    render() {
        let SavedGamesList = <h1>Loading...</h1>

        if (this.props.savedGamesState.length < 1) {
            SavedGamesList = <StyledNotSavedGames>Such empty</StyledNotSavedGames>
        }

        if (this.props.savedGamesState.length >= 1) {
            SavedGamesList = this.props.savedGamesState.map(game => (
                <GameCard
                    key={game.id}
                    title={game.name}
                    hoursViewed={game.hours_viewed}
                    saved={true}
                    rank={game.rank}
                />
            ))
        } 

        return (
            <StyledMainContainer>
                <StyledTitle>Saved Games🔖</StyledTitle>
                <StyledContainer>
                    {SavedGamesList}
                </StyledContainer>
            </StyledMainContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        savedGamesState : state.savedGames
    }
}

export default connect(mapStateToProps)(SavedGames);