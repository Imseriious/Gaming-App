import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledContainer = styled.div`
    width: 100%;
    margin: 10px auto;
    margin-bottom: 20px;
    border-top: 1px green solid;
    @media only screen and (max-width: 555px) {
        margin-top: 25px;
    }
`;

export const StyledTitle = styled.h1`
    width: 90%;
    margin: 10px auto;
    text-align: left;
    font-weight: 400;
    color: #00a82d;
    text-shadow: 1px 1px 1px #000000;
    @media only screen and (max-width: 555px) {
        transform: scale(0.8);
    }
`;

export const StyledGenresList = styled.div`
    list-style: none;
    width: 90%;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media only screen and (max-width: 577px) {
        justify-content: center;
    }
`;

export const StyledGenreLink = styled(Link)`
    all:unset;
    margin: 20px; 
    min-width: 200px;
    background-color: ${props =>
        props.theme.mode === 'dark' ? '#29bb5c' : 'none'};
    border-radius: 50% 50% 5% 5%;
    transition-duration: 0.2s;
    font-size: 1rem;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
        cursor: pointer;
        background-color: #00a82d;
        transform: scale(0.95)
    }
    @media only screen and (max-width: 577px) {
        max-width: 80px;
        font-size: 0.7rem;
        margin: 5px;
    }
`;

export const StyledGenreTitle = styled.h3`

`;