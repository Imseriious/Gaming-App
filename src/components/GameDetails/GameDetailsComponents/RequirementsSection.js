import React, { Component } from 'react';
//Styles:
import {
    StyledContainer,
    StyledTitle
} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledRequirementsSection'; 
 
class RequirementsSection extends Component {
    render(){
        console.log(this.props.requirements)
        return(
            <StyledContainer>
                <StyledTitle>Requirements:</StyledTitle>
                <p>Min CPU: {this.props.requirements[0].min_cpu}</p>
                <p>Rec CPU: {this.props.requirements[0].rec_cpu}</p>
                <p>Min GPU: {this.props.requirements[0].min_graphics}</p>
                <p>Rec GPU: {this.props.requirements[0].rec_graphics}</p>
                <p>Min Memory: {this.props.requirements[0].min_memory} GB</p>
                <p>Rec Memory: {this.props.requirements[0].rec_memory} GB</p>
            </StyledContainer>
        )
    }
}

export default RequirementsSection