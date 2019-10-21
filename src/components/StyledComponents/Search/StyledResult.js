import styled from 'styled-components';

export const StyledResult = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px grey solid;
    &:hover{
        background-color: #00a82d;
    }
`;

export const StyledBoxArt = styled.img`
    width: 90px;

`;


export const StyledName = styled.p`
    align-self: center;
    margin-left: 30px;
    font-size: 24px;
`;