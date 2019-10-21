import React, { Component } from 'react';
//Router:
import { Link, Route } from 'react-router-dom';

//Styles:
import {
    StyledResult,
    StyledBoxArt,
    StyledName
} from '../StyledComponents/Search/StyledResult';

class Results extends Component {


    render() {
        const boxart = `https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.name}`;
        return (
            <StyledResult>
                    <StyledBoxArt src={boxart} />
                    <StyledName>{this.props.name}</StyledName>
            </StyledResult>
        )
        
    }
}

export default Results