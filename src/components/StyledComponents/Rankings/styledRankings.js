import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    background-color: rgba(0, 91, 24, 0.1);
    margin-top: 50px;
    padding-top: 50px;
    `;

export const StyledListOfGames = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    padding-bottom: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen and (max-width: 555px){
        justify-content: center;
    }
    @media only screen and (max-width: 834px){
        justify-content: space-evenly;
    }
    
`;

export const StyledTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    margin-top: -50px;
    font-weight: 700;
    color: #00a82d;
    text-shadow: 1px 1px 1px #000000;
    text-align: center;
    @media only screen and (max-width: 555px){
        margin-top: 0px;
    }
`