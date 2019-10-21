import React from 'react';
//Router:
import {Link} from 'react-router-dom';
//Components: 

import NightMode from '../NightMode/NightMode';
//Assets:
import Logo from '../../assets/newzoo-logo.svg';
//Styles:
import {
    StyledNavBar,
    StyledLogo,
    StyledLogoImage
} from '../StyledComponents/NavBar/StyledNavBar';

//Component: 
const Navbar = () => {
    
    return (
        <StyledNavBar>
            <StyledLogo href="/"><StyledLogoImage  src={Logo}/></StyledLogo>
            <NightMode />
        </StyledNavBar>
    )
}

export default Navbar; //ADD ROUTER LINK