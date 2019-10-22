import React from 'react';
import {
    StyledContainer,
    StyledLink
} from '../StyledComponents/Footer/StyledFooter';

const Footer = () => {
    return(
        <StyledContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/HoursWatchedRanking">Most Viewed Ranking</StyledLink>
            <StyledLink to="/TopPcRanking">Top PC Ranking</StyledLink>
        </StyledContainer>
    )
}

export default Footer;