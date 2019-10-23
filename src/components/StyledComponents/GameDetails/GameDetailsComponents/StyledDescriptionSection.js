import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 0 auto;
    
`;

export const StyledDescriptionSection = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px 0 0 10px;
`;

export const StyledDescription = styled.p`
    max-height:300px;
    overflow-y: scroll;
    border-bottom: 0.2px grey solid;
    border-left: 0.2px grey solid;
    border-radius: 10px 0 0 10px;
    text-align: left;
    padding: 0 20px;
    line-height: 25px;
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#3c895f' : 'none'};
`;

export const StyledDescriptionTitle = styled.h2`
    margin-top: 0px;
    text-align: left;
    color: ${props =>
    props.theme.mode === 'dark' ? '#00a82d' : 'black'};
`;