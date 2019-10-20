import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    margin: 10px auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0, 91, 24, 0.1);
`
export const StyledListInfo = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

export const StyledTitle = styled.h1`
    text-align: left;
    font-weight: 500;
    color: #00a82d;
`

export const StyledSeeMoreButton = styled.a`
    float: right;
    text-decoration:none;
    color: #00a82d;
    font-size: 1.3rem;
    align-self: center;
    &:hover {
      text-decoration: underline;
    }
`

export const StyledListOfGames = styled.div`
    display: flex;
    width: 90%;
    min-height: 380px;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
`