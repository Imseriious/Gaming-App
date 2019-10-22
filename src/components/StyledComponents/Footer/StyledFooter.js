import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledContainer = styled.div`
    height: 50px;
    bottom: 0px;
    background-color: grey;
    margin-top: -10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media only screen and (max-width: 555px){
        flex-direction: column;
        justify-content: space-around;
        height: 100px;
    } 
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    align-self: center;
    color: green;
    font-size: 1.2rem;
    font-weight: 500;
    transition-duration: 0.2s;
    &:hover{
        transform: scale(1.1)
    }
    @media only screen and (max-width: 700px){
        font-size: 1rem;
    }

    
`;

