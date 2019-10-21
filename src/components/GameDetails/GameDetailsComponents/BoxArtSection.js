import React, { Component } from 'react';
//Styles:
import {
    StyledBoxArtSection,
    StyledBoxArt

} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledBoxArtSection';

//Component:
class BoxArtSection extends Component {

    render() {
        const boxartURL = `https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.name}`;
        return (
            <StyledBoxArtSection>
                <StyledBoxArt src={boxartURL}/>
            </StyledBoxArtSection>
        )
    }
}

export default BoxArtSection;