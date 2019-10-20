import styled from 'styled-components';

export const StyledMedia = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: auto;
`;


export const StyledTitle = styled.h2`
    margin-top: 0px;
    text-align: left;
    border-top: 0.5px grey solid;
`;


export const StyledImages = styled.div`
    display: flex;
    justify-content: space-between;
    height: 250px;
    margin-bottom: 20px;
    overflow-x: scroll;
`;

export const StyledImage = styled.img`
    width: 500px;
    margin: 0px 20px;
    border-radius: 10px;
`;

export const StyledVideos = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 20px;
   overflow-x: scroll;
`;

export const StyledVideo = styled.div`
    margin: 0 10px;
    
`;
