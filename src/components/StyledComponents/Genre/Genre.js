import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
`;

export const StyledGenreTitle = styled.h1`
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
`;

export const StyledGenreMedia = styled.div`
    margin: 50px auto;
    width: 95%;
`;

export const StyledGenreImage = styled.img`
    width: 40%;
    margin: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (max-width: 800px) {
        width: 85%;
    }
`;

export const StyledDescContainer = styled.div`
    width: 100%;
    background-color: rgba(50, 185, 86, 0.2);
    padding: 40px 0;
    margin: 40px auto;
`;

export const StyledGenreDescription = styled.p`
    width: 90%;
    font-size: 1.5rem;
    text-align: justify;
    line-height: 2rem;
    margin: auto;
    color: ${props =>
        props.theme.mode === 'dark' ? 'white' : 'black'};
    @media only screen and (max-width: 800px) {
        font-size: 1.2rem; 
        line-height: 1.8rem;
    }
`;
