import React, { Component } from 'react';
//Styles:
import {
    StyledContainer,
    StyledTitle,
    StyledNoRequirements,
    StyledRequirements,
    StyledRequirement,
    StyledReq,
    StyledRequirementTitle,
    StyledReqData
} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledRequirementsSection';

//Component: 
class RequirementsSection extends Component {
    render() {
        console.log(this.props.requirements)
        let requirements;
        if (this.props.requirements[0] !== undefined) { //This could be improved:
            requirements = <>
                <StyledTitle>Requirements:</StyledTitle>
                <StyledRequirements>
                    <StyledRequirement>
                        <StyledRequirementTitle>CPU:</StyledRequirementTitle>
                        <StyledReq>Minimum
                                <StyledReqData>{this.props.requirements[0].min_cpu}</StyledReqData>
                        </StyledReq>
                        <StyledReq>Recommended
                                <StyledReqData>{this.props.requirements[0].rec_cpu}</StyledReqData>
                        </StyledReq>
                    </StyledRequirement>
                    <StyledRequirement>
                        <StyledRequirementTitle>GPU:</StyledRequirementTitle>
                        <StyledReq>Minimum
                            <StyledReqData>{this.props.requirements[0].min_graphics}</StyledReqData>
                        </StyledReq>
                        <StyledReq>Recommended
                            <StyledReqData>{this.props.requirements[0].rec_graphics}</StyledReqData>
                        </StyledReq>
                    </StyledRequirement>
                    <StyledRequirement>
                        <StyledRequirementTitle>MEMORY:</StyledRequirementTitle>
                        <StyledReq>Minimum
                                <StyledReqData>{this.props.requirements[0].min_memory}GB</StyledReqData>
                        </StyledReq>
                        <StyledReq>Recommended
                            <StyledReqData>{this.props.requirements[0].rec_memory}GB</StyledReqData>
                        </StyledReq>
                    </StyledRequirement>
                </StyledRequirements>
            </>

        } else if (this.props.requirements[0] === undefined) {
            requirements =
                <StyledNoRequirements>No hardware requirements found</StyledNoRequirements>

        }
        return (
            <StyledContainer>
                {requirements}
            </StyledContainer>

        )
    }
}

export default RequirementsSection