import React, { Component } from 'react';
//Components:
import Media from './MediaSection';
//Styles:
import {
    StyledDescriptionSection,
    StyledDescription,
    StyledDescriptionTitle,
    StyledContainer

} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledDescriptionSection';


//Component:
class DescriptionSection extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledDescriptionTitle>About: </StyledDescriptionTitle>
                <StyledDescriptionSection>
                    <StyledDescription>{this.props.description}</StyledDescription>
                </StyledDescriptionSection>
            </StyledContainer>
        )
    }
}

export default DescriptionSection;