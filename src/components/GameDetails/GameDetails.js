import React, { Component } from 'react';
//Axios-Redux
import axios from 'axios';
import { getGameIDUrl, headers } from '../../axios/axios';
import * as actionType from "../../store/actions";
import { connect } from 'react-redux';
//Components:
import BoxArtSection from './GameDetailsComponents/BoxArtSection';
import DetailsSection from './GameDetailsComponents/DetailsSection';
import MediaDescriptionSection from './GameDetailsComponents/MediaDescriptionSection/MediaDescriptionSection';
//Styles:
import { StyledGameDetails } from '../StyledComponents/GameDetails/StyledGameDetails';
import { platform } from 'os';

//Component:
class GameDetails extends Component {

    componentDidMount() {
        this.getGameID()
    }

    getGameID() {
        const body = {
            "search_text": `${this.props.match.params.title}`, "fields": ["id", "name", "release_dates"]
        }
        axios.post(getGameIDUrl, body, headers)
            .then(res => {
                this.props.gameId(res);
                this.getGameDetails();
            })
            .catch(error => {
                console.log(error);
            });
    }
    getGameDetails() {
        const API_URL = `https://api.newzoo.com/v1.0/metadata/game/${this.props.gameIdState}?__permission_set=Explorer%20Games`;

        axios.get(API_URL, headers)
            .then(res => this.props.gameDetails(res.data))
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let gameDetails;
        let detailsSection;
        let boxArtSection;
        let mediaDescriptionSection;

        if (this.props.gameIdState !== null) {
            console.log("Check Game ID State:", this.props.gameIdState)
        }
        if(this.props.gameDetailsState !== null) {
            gameDetails = this.props.gameDetailsState
            console.log(gameDetails)
        }
        if(gameDetails !== undefined) {
            boxArtSection = 
                <BoxArtSection 
                    name={gameDetails.name}/>;
        }
        if (gameDetails !== undefined) {
            let gamePublishers = gameDetails.publishers.map(publisher => publisher.name)
            detailsSection = 
                <DetailsSection 
                    publishers={gamePublishers} 
                    genre={gameDetails.genres[0].name}
                    release={gameDetails.release_date}
                    rank={gameDetails.rank}
                    platforms={gameDetails.release_dates[0].platforms}
                    />
        }

        if (gameDetails !== undefined) {
            mediaDescriptionSection = 
                <MediaDescriptionSection 
                    description={gameDetails.description}
                    files={gameDetails.media_files}
                    />
        }

        return (
            <StyledGameDetails>
                {boxArtSection}
                {detailsSection}
                {mediaDescriptionSection}
            </StyledGameDetails>
        )
    }
}

//React-Redux
const mapDispatchToProps = dispatch => {
    return {
        gameId: (res) => dispatch({ type: actionType.GAME_ID, payload: res }),
        gameDetails: (res) => dispatch({ type: actionType.GAME_DETAILS, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        gameIdState: state.gameId,
        gameDetailsState: state.gameDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);