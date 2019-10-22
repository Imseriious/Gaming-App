import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledContainer = styled.div`
    width: 100%;
    margin: 10px auto;
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0, 91, 24, 0.1);
    @media only screen and (max-width: 555px) {
        margin: 0px auto;
    }
`
export const StyledListInfo = styled.div`
    width: 90%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 555px) {
        width: 100%;
    }
`;

export const StyledTitle = styled.h1`
    text-align: left;
    font-weight: 500;
    color: #00a82d;
    @media only screen and (max-width: 555px) {
        transform: scale(0.8);
    }
    
`

export const StyledSeeMoreLink = styled(Link)`
    float: right;
    text-decoration:none;
    color: #00a82d;
    font-size: 1.3rem;
    align-self: center;
    &:hover {
      text-decoration: underline;
    }
`

export const StyledListOfGames = styled.div`
    display: flex;
    width: 90%;
    min-height: 380px;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 1450px) {
        flex-wrap: wrap;
    }
    @media only screen and (max-width: 1350px) {
        justify-content: space-evenly;
    }
`