import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-self: center;
    margin-top: -100px;
    margin-bottom: 100px;
`;

export const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
`;

export const StyledInput = styled.input`
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    padding: 5px 15px;
    text-align: left;
    width: 50%;
    height: 35px;
    border: 1px #D2D2D2 solid;
    border-radius: 5px;
`;

export const StyledButton = styled.button`
    border:none;
    border-radius: 0px 10px 10px 0px;
    margin-left: -5px;
    width: 45px;
    height: 47px;
    background-color: #00a82d;
    padding: 0;
`;

export const StyledSearchButtonIcon = styled.img`
    width: 35px;
`; 

export const StyledResults = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    overflow-y: scroll;
    position: absolute;
    align-self: center;
    margin:50px auto;
    padding: 10px;
    width: 40%;
    max-height: 400px;
    box-shadow: black 5px 4px 4px 4px;
    
`;

export const StyledNoResults = styled.div`
    display: none;
`;