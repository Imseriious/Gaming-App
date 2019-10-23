import React from 'react';
//Assets:
import Logo from '../../assets/newzoo-logo.svg';
//Styles:
import {
    StyledNavBar,
    StyledLogoLink,
    StyledLogoImage,
    StyledSavedGamesLink,
    StyledDarkModeButton
} from '../StyledComponents/NavBar/StyledNavBar';

//Component: 
const Navbar = (props) => {
    
    return (
        <StyledNavBar>
            <StyledLogoLink to="/"><StyledLogoImage  src={Logo}/></StyledLogoLink>
            <StyledDarkModeButton onClick={props.toggleTheme}>Night Mode 🌚</StyledDarkModeButton>
            <StyledSavedGamesLink to="/SavedGames">Saved Games🔖</StyledSavedGamesLink>
        </StyledNavBar>
    )
}

export default Navbar;