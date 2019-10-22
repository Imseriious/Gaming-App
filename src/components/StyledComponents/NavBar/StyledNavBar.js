import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    width: 90%;
    height: 200px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`;

export const StyledLogoLink = styled(Link)`
    width: 150px;
    margin: auto 0px;
`;

export const StyledLogoImage = styled.img`
    width: 100px;
    margin: auto;
`;

export const StyledSavedGamesLink = styled(Link)`
    align-self: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: #00a82d;
    transition-duration: 0.3s;
    &:hover{
        color: #0999;
        transform: scale(1.1);
    }
`;
