import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 90%
    margin: auto;
`;

export const StyledTitle = styled.h1`
    text-align: left;
    font-weight: 400;
    color: #00a82d;
    text-shadow: 1px 1px 1px #000000;
    @media only screen and (max-width: 555px) {
        transform: scale(0.8);
    }
`;

export const StyledGenresList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StyledGenre = styled.button`
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
`;

export const StyledGenreTitle = styled.h3`

`;