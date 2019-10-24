import styled from 'styled-components';

export const StyledGameCard = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    transition-duration: 0.2s;
    
    &:hover{
        transform: scale(1.1)
    }
    @media only screen and (max-width: 1450px) {
        transform: scale(0.9)
    }

    @media only screen and (max-width: 555px) {
        transform: scale(1.1);
        margin-top: 50px;
    }
    
`;

export const StyledSaveGame = styled.button`
    all:unset;
    font-size: 1.4rem;
    width: 30px;
    transition-duration: 0.2s;
    &:hover{
        cursor: pointer;
        transform: scale(1.4)
    }
`;
export const StyledDeleteGame = styled.button`
    background-color : salmon;
    cursor: pointer;
    width: 70px;
    padding-bottom: 20px;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: -20px;
    padding-left: 5px;
    font-size: 18px; 
    text-align: left;
    color: white;
    font-weight: 300;
    &:hover{
         cursor: pointer;
         margin-bottom: -10px;
    }
`;

export const StyledBoxArt = styled.img`
    width: 250px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


export const StyledBasicInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5px;
    margin-top: -5px;
    background-color: ${props =>
        props.theme.mode === 'dark' ? '#222220' : 'white'};
    height: 70px;
    margin-bottom: 10px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledTitle = styled.p`
    margin: 0px;
    text-align: center;
    max-width: 250px;
    font-weight: 700;
    color: ${props =>
        props.theme.mode === 'dark' ? 'white' : 'black'};
`;


export const StyledHoursViewed = styled.p`
    font-size: 16px;
    text-decoration: none;
    margin-top: 0px;
    color: ${props =>
        props.theme.mode === 'dark' ? 'white' : 'black'};
`;

export const StyledSaved = styled.p`
    background-color : #00a82d;
    width: 70px;
    padding-bottom: 20px;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: -20px;
    padding-left: 5px;
    font-size: 18px; 
    text-align: left;
    color: white;
    font-weight: 300;
`;

