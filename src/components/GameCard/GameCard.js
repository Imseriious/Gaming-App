import React, { Component } from 'react';
//React-Redux:
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
//Axios:
import Api, {getGameIDUrl} from '../../axios/api';
//Router:
import { Link } from 'react-router-dom';
//Styles:
import {
    StyledGameCard,
    StyledHoursViewed,
    StyledBoxArt,
    StyledBasicInfo,
    StyledTitle,
    StyledSaveGame,
    StyledDeleteGame,
    StyledSaved,
    StyledGameRank
} from '../StyledComponents/GameCard/StyledGameCard';

//Component:
class GameCard extends Component {

    deleteGame = () => {
        let gameName = this.props.title
        this.props.deleteGame(gameName)
        console.log(this.props.savedGamesState)
    }

    getGame = () => { //Geting Game ID
        let body = {
            "search_text": `${this.props.title}`, "fields": ["id", "name", "release_dates"]
        }

        Api.post(getGameIDUrl, body)
            .then(res => res.data.filter((result) => { return result.type === "game" }))
            .then(res => this.saveGame(res[0].id))
    }

    saveGame = (game_id) => { //Saving the game based on the ID
        let API_URL = `metadata/game/${game_id}?__permission_set=Explorer%20Games`;
        Api.get(API_URL)
            .then(res => this.props.saveGame(res.data))
    }

    render() {
        const boxart = `https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.title}`;

        let saveGame = <StyledSaveGame onClick={this.getGame}>🔖</StyledSaveGame>; //This will save the game
        if (this.props.savedGamesState) {
            this.props.savedGamesState.map(game => {
                if (game.name === this.props.title) {
                    saveGame = <StyledSaved>Saved!</StyledSaved> //If title is saved replace icon
                }
            })
        }

        if (this.props.saved === true) { //In the SavedGames replace button with "X"
            saveGame = <StyledDeleteGame onClick={this.deleteGame}>X</StyledDeleteGame>;
        }

        let hoursViewed = null;

        if (this.props.hoursViewed) {
            let totalHours = this.props.hoursViewed.toFixed(0)
            hoursViewed = <StyledHoursViewed>Total Hours Wached: {totalHours.slice(0, 2)}M</StyledHoursViewed>
        }

        let gameRank = null;
        if(this.props.rank) {
            gameRank = <StyledGameRank>Rank: {this.props.rank}</StyledGameRank>
        }

        return (
            <StyledGameCard>
                {saveGame}
                <Link to={`/game/${this.props.title}`}>
                    <StyledBoxArt src={boxart} />
                </Link>
                <StyledBasicInfo>
                    <StyledTitle>{this.props.title}</StyledTitle>
                    {hoursViewed}
                    {gameRank}
                </StyledBasicInfo>
            </StyledGameCard>
        )

    }
}

//React-Redux
const mapStateToProps = state => {
    return {
        savedGamesState: state.savedGames
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveGame: (res) => dispatch({ type: actionType.SAVE_GAME, payload: res }),
        deleteGame: (res) => dispatch({ type: actionType.DELETE_GAME, payload: res })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);