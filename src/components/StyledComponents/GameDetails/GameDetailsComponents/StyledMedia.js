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
    align-items: center;
    height: 300px;
    margin-bottom: 20px;
    overflow-x: scroll;
`;

export const StyledImage = styled.img`
    width: 400px;
    height: 200px;
    margin: 0px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledImageLink = styled.a`
    height: 250px;
    margin-bottom: 0px;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
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
