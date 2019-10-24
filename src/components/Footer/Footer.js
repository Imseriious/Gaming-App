import React from 'react';
//Styled:
import {
    StyledContainer,
    StyledLink
} from '../StyledComponents/Footer/StyledFooter';
//Component:
const Footer = () => {
    return(
        <StyledContainer>
            <StyledLink to="/">Home🏠</StyledLink>
            <StyledLink to="/HoursWatchedRanking">Most Viewed Ranking👀</StyledLink>
            <StyledLink to="/TopPcRanking">Top PC Ranking🖱️</StyledLink>
        </StyledContainer>
    )
}
export default Footer;