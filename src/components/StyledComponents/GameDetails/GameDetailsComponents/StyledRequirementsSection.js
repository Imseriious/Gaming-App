import styled from 'styled-components';

export const StyledContainer = styled.div`
    border-left: 1px grey solid;
    padding-left: 5px;
`;

export const StyledTitle = styled.h2`
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const StyledRequirements = styled.div`
    display: flex;
    justify-content: column;
`;

export const StyledRequirement = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    
`;

export const StyledReqData = styled.p`
    font-weight: 400;
    margin-top:0px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

export const StyledRequirementTitle = styled.h2`
    font-size: 1.2rem;
    text-decoration: underline;
`;

export const StyledReq = styled.div`
    margin-left: 10px;
    padding-right: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    border-right: 1px solid grey;
`;

export const StyledNoRequirements = styled.h2`
    text-align: center;
    font-style: italic;
`;