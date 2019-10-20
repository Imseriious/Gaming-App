import React from 'react';
//Assets:
import Searchicon from '../../assets/search.svg';
//Styles:
import {
    StyledForm,
    StyledInput,
    StyledButton,
    StyledSearchButtonIcon
} from '../StyledComponents/Search/StyledSearch';

//Component:
const Search = () => {
    return (
        <StyledForm>
                <StyledInput type="text" placeholder="Search Game..." />
                <StyledButton><StyledSearchButtonIcon src={Searchicon}/></StyledButton>
        </StyledForm>
    )
}

export default Search;