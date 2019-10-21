import React, { Component } from 'react';
//Components:
import Top5HoursWatched from './Top5HoursWatched/Top5HoursWatched';
import Top5PC from './Top5PC/Top5PC';
import Search from '../Search/Search';
//Style: 
import {StyledHomePage} from '../StyledComponents/HomePage/StyledHomePage';

//Component:
class HomePage extends Component {
    render() {
        return (
            <StyledHomePage>
                <Search />
                <Top5HoursWatched />
                <Top5PC />
            </StyledHomePage>
        )
    }
}

export default HomePage;
