import styled from 'styled-components';

export const StyledDetailsSection = styled.div`
    margin-left: 20px;
    margin-right: 100px;
    border-left: 0.5px grey solid;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
    max-height: 550px;
    @media only screen and (max-width: 714px) {
        transform: scale(0.8);
        margin-left: 0px;
    }
    @media only screen and (max-width: 555px) {
        align-self: center;
        margin: auto;
        border: none;
        font-size: 1.2rem;
        text-align: center;
    }
`;

export const StyledRank = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 0.5px grey solid;
    width: 50%;
    @media only screen and (max-width: 555px) {
        align-self: center;
    }
`;

export const StyledRankTitle = styled.h2`
    margin-top: 0px;
    margin-right: 15px;
    @media only screen and (max-width: 555px) {
        
        text-align: center;
    }
`;

export const StyledRankNumber = styled.h2`
    margin-top: 0px;
`;

export const StyledGenres = styled.div`
    
`;

export const StyledPublisher = styled.div`
    list-style-type: none;
`;

export const StyledReleaseDate = styled.div`

`;


export const StyledPlatforms = styled.div`
    list-style-type: none;
`;