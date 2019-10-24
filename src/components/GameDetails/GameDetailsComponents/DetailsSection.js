import React, {Component} from 'react';
//Styles:
import {
    StyledDetailsSection,
    StyledGenres,
    StyledPublisher,
    StyledReleaseDate,
    StyledRank,
    StyledPlatforms,
    StyledRankTitle,
    StyledRankNumber
} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledDetailsSection';

//Component:
class DetailsSection extends Component {
    render(){
        let releaseDate = this.props.release.slice(0, 10); //Insead of using moment.js
        let gamePublishers = this.props.publishers.map(publisher => (<li key={publisher}>{publisher}</li>));
        let platforms = this.props.platforms.map(platform => <li key={platform}>{platform}</li>)
        
        return(
            <StyledDetailsSection>
                <StyledRank><StyledRankTitle>Rank:</StyledRankTitle><StyledRankNumber>{this.props.rank}</StyledRankNumber></StyledRank>
                <StyledPublisher><h2>Publisher:</h2>{gamePublishers}</StyledPublisher>
                <StyledGenres><h2>Genre:</h2>{this.props.genre}</StyledGenres>
                <StyledReleaseDate><h2>Release Date:</h2>{releaseDate}</StyledReleaseDate>
                <StyledPlatforms><h2>Platforms:</h2>{platforms}</StyledPlatforms>
            </StyledDetailsSection>
        )
    }
}

export default DetailsSection;