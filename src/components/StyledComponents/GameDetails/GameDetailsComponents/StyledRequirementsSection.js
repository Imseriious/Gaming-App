import styled from 'styled-components';

export const StyledContainer = styled.div`
    border-left: 1px grey solid;
    padding-left: 5px;
`;

export const StyledTitle = styled.h2`
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    color: ${props =>
    props.theme.mode === 'dark' ? '#00a82d' : 'black'};
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
    color: ${props =>
    props.theme.mode === 'dark' ? 'white ' : 'none'};
    
`;

export const StyledReq = styled.div`
    margin-left: 10px;
    padding-right: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    border-right: 1px solid grey;
    text-shadow: 1px 1px 1px #000000;
    color: ${props =>
    props.theme.mode === 'dark' ? 'white ' : 'none'};
`;

export const StyledNoRequirements = styled.h2`
    text-align: center;
    font-style: italic;
    color: ${props =>
    props.theme.mode === 'dark' ? '#3c895f' : 'black'};
`;