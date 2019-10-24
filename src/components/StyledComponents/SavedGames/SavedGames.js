import styled from 'styled-components';

export const StyledTitle = styled.h1`
    margin: -60px auto 0px;
    color: #00a82d;
    font-weight: 500;
    border-bottom: 0.5px ${props => props.theme.mode === 'dark' ? '#00a82d' : 'black'} solid;
    width: 250px;
    text-shadow: 1px 1px 1px #000000;
    @media only screen and (max-width: 555px) {
        margin-top: 10px;
    }
`;

export const StyledContainer = styled.div`
    width: 90%;
    margin: 100px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

`;

export const StyledNotSavedGames = styled.h1`
    font-weight: 500;
    border-bottom: 0.5px ${props => props.theme.mode === 'dark' ? 'white' : 'black'} solid;
    width: 50%;
    margin: 220px auto;
    padding-bottom: 30px;
    color: ${props =>
    props.theme.mode === 'dark' ? 'white' : 'black'};
    
`;

export const StyledMainContainer = styled.div`
 

`;