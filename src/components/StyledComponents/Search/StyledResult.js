import styled from 'styled-components';

export const StyledResult = styled.div`

    background-color: white;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px grey solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        background-color: #D6F9B3;
    }
`;

export const StyledBoxArt = styled.img`
    width: 90px;
    @media only screen and (max-width: 555px){
        display: none;
    }
    
`;


export const StyledName = styled.p`
    align-self: center;
    margin-left: 30px;
    font-size: 24px;
    @media only screen and (max-width: 555px){
        font-size: 14px;
    }
`;