import React, {Component} from 'react';
//Components:
import Media from './Media';
//Styles:
import {
    StyledMediaDescriptionSection,
    StyledDescription,
    StyledDescriptionTitle,
    StyledMediaTitle

} from '../../../StyledComponents/GameDetails/GameDetailsComponents/StyledMediaDescriptionSection';

//Component:
class MediaDescriptionSection extends Component {
    render(){
        return(
            <StyledMediaDescriptionSection>
                <StyledDescriptionTitle>About: </StyledDescriptionTitle>
                <StyledDescription>{this.props.description}</StyledDescription>
                <StyledMediaTitle>Media: </StyledMediaTitle>
                <Media files={this.props.files}/>
            </StyledMediaDescriptionSection>
        )
    }
}

export default MediaDescriptionSection;