import React, { Component } from 'react';
//Router
import { Link } from 'react-router-dom';
//Styles
import {
    StyledGameCard,
    StyledHoursViewed,
    StyledBoxArt
} from '../StyledComponents/GameCard/StyledGameCard';

//Component:
class GameCard extends Component {
    render() {
        const boxart = `https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.title}`;

        let hoursViewed = null;
        
        
        if(this.props.hoursViewed) {
            let totalHours = this.props.hoursViewed.toFixed(0)
            hoursViewed = <StyledHoursViewed>Total Hours Wached: {totalHours}</StyledHoursViewed>
        }
        
        return (
            <StyledGameCard>
                <Link to={`/game/${this.props.title}`}>
                    <StyledBoxArt src={boxart}/>
                </Link>
                {hoursViewed} 
            
            </StyledGameCard>
        )

    }
}

export default GameCard;