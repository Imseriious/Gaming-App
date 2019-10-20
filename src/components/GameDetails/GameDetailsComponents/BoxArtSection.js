import React, { Component } from 'react';
//Styles:
import {
    StyledBoxArtSection,
    StyledTitle,
    StyledBoxArt

} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledBoxArtSection';

//Component:
class BoxArtSection extends Component {

    render() {
        const boxartURL = `https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.name}`;
        return (
            <StyledBoxArtSection>
                <StyledTitle>{this.props.name}</StyledTitle>
                <StyledBoxArt src={boxartURL}/>
            </StyledBoxArtSection>
        )
    }
}

export default BoxArtSection;