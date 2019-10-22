import React from 'react';
//Assets:
import Logo from '../../assets/newzoo-logo.svg';
//Styles:
import {
    StyledNavBar,
    StyledLogoLink,
    StyledLogoImage,
    StyledSavedGamesLink
} from '../StyledComponents/NavBar/StyledNavBar';

//Component: 
const Navbar = () => {
    
    return (
        <StyledNavBar>
            <StyledLogoLink to="/"><StyledLogoImage  src={Logo}/></StyledLogoLink>
            <StyledSavedGamesLink to="/SavedGames">Saved Games🔖</StyledSavedGamesLink>
        </StyledNavBar>
    )
}

export default Navbar;