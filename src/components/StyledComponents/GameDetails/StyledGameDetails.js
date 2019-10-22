import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const StyledGameName = styled.h1`
    margin-top: -50px;
    margin-bottom: 80px;
    font-weight: 400;
    font-size: 3rem;
    color: #00a82d;
    text-shadow: 1px 1px 1px #000000;
    text-decoration: underline;
    @media only screen and (max-width: 1200px) {
        margin-top: 0px;
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 680px) {
        font-size: 1.9rem;
    }
`;

export const StyledBoxArtDetails = styled.div`
    display: flex;
    
    @media only screen and (max-width: 1200px) {
        margin: auto;
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 555px) {
        flex-direction: column;
    }
`;
 
export const StyledGameDetails = styled.div`
    width: 90%;
    margin:30px auto;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    
    @media only screen and (max-width: 1198px) {
        flex-direction: column;
    }
    
`;

export const StyledDescriptionsRequirements = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
`;

export const StyledMediaSection = styled.div`
    
`;
//Needs improvment:
export const StyledMediaSectionTitle = styled.h2` 
    color: green;
    font-size: 1.8rem;
    font-weight: 700;
    @media only screen and (max-width: 1600px) {
        margin-top: 50px;
    }
    @media only screen and (max-width: 1400px) {
        margin-top: 100px;
    }
    @media only screen and (max-width: 1200px) {
        margin-top: 0px;
    }
    @media only screen and (max-width: 850px) {
        margin-top: 50px;
    }
    @media only screen and (max-width: 750px) {
        margin-top: 200px;
    }
`;

