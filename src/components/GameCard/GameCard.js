import React, { Component } from 'react';
//React-Redux
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
//Router
import { Link } from 'react-router-dom';
//Styles
import {
    StyledGameCard,
    StyledHoursViewed,
    StyledBoxArt,
    StyledBasicInfo,
    StyledTitle,
    StyledSaveGame,
    StyledDeleteGame
} from '../StyledComponents/GameCard/StyledGameCard';

//Component:
class GameCard extends Component {

    deleteGame = () => { //Needs adjustments
        let gameName = this.props.title;
        this.props.deleteGame(gameName)
        console.log(this.props.savedGamesState)

    }

    saveGame = () => { //"Homemade" way of saving the game
        let gameName = this.props.title; 

        if (this.props.listOfGamesState !== null) { //Check in the list of TOP Rankings
            this.props.listOfGamesState.map(game => {
                if (game.title === gameName) {
                    this.props.saveGame(game)
                   
                }
            })
        } else if (this.props.listOfGamesState2 !== null) { //Check in the list of Most Viewed Ranking
            this.props.listOfGamesState2.map(game => {
                if (game.game == gameName) {
                    this.props.saveGame(game)
                  
                }
            })
        } else if (this.props.listOfGamesState3 !== null) { //Check top 5 pc in homepage
            this.props.listOfGamesState3.map(game => {
                if (game.title == gameName) {
                    this.props.saveGame(game)
       
                }
            })
        } else if (this.props.listOfGamesState4 !== null) { //Check top 5 viewed in homepage
            this.props.listOfGamesState4.map(game => {
                if (game.game == gameName) {
                    this.props.saveGame(game)
      
                }
            })
        }

    }

    render() {
        const boxart = `https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.title}`;
        let saveGame = <StyledSaveGame onClick={this.saveGame}>🔖</StyledSaveGame>; //This will save the game (Needs adjustments)

        if(this.props.saved === true) { //If the game is saved replace with X icon
            saveGame = <StyledDeleteGame onClick={this.deleteGame}>X</StyledDeleteGame>;
        }

        let hoursViewed = null;

        if (this.props.hoursViewed) {
            let totalHours = this.props.hoursViewed.toFixed(0)
            hoursViewed = <StyledHoursViewed>Total Hours Wached: {totalHours.slice(0, 2)}M</StyledHoursViewed>
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
                </StyledBasicInfo>
            </StyledGameCard>
        )

    }
}

//React-Redux
const mapStateToProps = state => {
    return {
        listOfGamesState: state.topPCRanking,
        listOfGamesState2: state.hoursWatchedRanking,
        listOfGamesState3: state.top5PC,
        listOfGamesState4: state.top5HoursWatched,
        savedGamesState: state.savedGames
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveGame: (res) => dispatch({ type: actionType.SAVE_GAME, payload: res }),
        deleteGame: (res) => dispatch({type: actionType.DELETE_GAME, payload: res})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);