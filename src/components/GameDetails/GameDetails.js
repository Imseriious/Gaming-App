import React, { Component } from 'react';
//Axios-Redux
import axios from 'axios';
import { getGameIDUrl, headers } from '../../axios/axios';
import * as actionType from "../../store/actions";
import { connect } from 'react-redux';
//Components:
import BoxArtSection from './GameDetailsComponents/BoxArtSection';
import DetailsSection from './GameDetailsComponents/DetailsSection';
import DescriptionSection from './GameDetailsComponents/DescriptionSection';
import MediaSection from './GameDetailsComponents/MediaSection';
import RequirementsSection from './GameDetailsComponents/RequirementsSection';
//Styles:
import {
    StyledGameDetails,
    StyledContainer,
    StyledMediaSection,
    StyledDescriptionsRequirements,
    StyledGameName,
    StyledMediaSectionTitle,
    StyledBoxArtDetails
} from '../StyledComponents/GameDetails/StyledGameDetails';

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
        let gameName;
        let detailsSection;
        let boxArtSection;
        let descriptionSection;
        let mediaSection;
        let requirementsSection;

        if (this.props.gameDetailsState !== null) {
            gameDetails = this.props.gameDetailsState
        }
        if (gameDetails !== undefined) {
            
            //GameName:
            gameName = <StyledGameName>🎮{gameDetails.name}</StyledGameName>

            //BoxArtSection:
            boxArtSection =
                <BoxArtSection name={gameDetails.name}/>;

            //DetailsSection:
            let gamePublishers = gameDetails.publishers.map(publisher => publisher.name)
            detailsSection =
                <DetailsSection
                    key={gamePublishers}
                    publishers={gamePublishers}
                    genre={gameDetails.genres[0].name}
                    release={gameDetails.release_date}
                    rank={gameDetails.rank}
                    platforms={gameDetails.release_dates[0].platforms}
                />

            //DescriptionSection:
            descriptionSection =
                <DescriptionSection
                    description={gameDetails.description}
                />

            //MediaSection:
            mediaSection = 
                <MediaSection 
                    files={gameDetails.media_files} />

            //RequirementsSection
            requirementsSection = 
                <RequirementsSection 
                    requirements={gameDetails.hardware_requirements} />
        }

        return (
            <StyledContainer >
                {gameName}
                <StyledGameDetails>
                    <StyledBoxArtDetails>
                    {boxArtSection}
                    {detailsSection}
                    </StyledBoxArtDetails>
                    <StyledDescriptionsRequirements>
                        {descriptionSection}
                        {requirementsSection}
                    </StyledDescriptionsRequirements>
                </StyledGameDetails>
                <StyledMediaSection>
                    <StyledMediaSectionTitle>Media📷</StyledMediaSectionTitle>
                    {mediaSection}
                </StyledMediaSection>
            </StyledContainer>
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