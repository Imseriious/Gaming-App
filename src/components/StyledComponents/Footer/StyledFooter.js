import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledContainer = styled.div`
    height: 50px;
    position:relative;
    bottom: 0px;
    margin-top: 0px;
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#1111' : '#dbf3e1'};
    padding: 20px;
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

