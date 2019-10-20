import React from 'react';
//Components: 
import Search from '../Search/Search';
import NightMode from '../NightMode/NightMode';
//Assets:
import Logo from '../../assets/newzoo-logo.svg';
//Styles:
import {
    StyledNavBar,
    StyledLogo,
} from '../StyledComponents/NavBar/StyledNavBar';

//Component: 
const Navbar = () => {
    
    return (
        <StyledNavBar>
            <StyledLogo src={Logo}/>
            <Search />
            <NightMode />
        </StyledNavBar>
    )
}

export default Navbar; //ADD ROUTER LINK