import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledContainer = styled.div`
    width: 100%;
    margin: 10px auto;
    padding: 40px 0;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : 'none'};
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
    font-weight: 400;
    color: #00a82d;
    text-shadow: 1px 1px 1px #000000;
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
    transition-duration: 0.3s;
    &:hover {
      text-decoration: underline;
      transform: scale(0.9)
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