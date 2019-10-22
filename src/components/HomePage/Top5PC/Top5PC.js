import React, { Component } from 'react';
//Axios-Redux:
import axios from 'axios';
import { top5PCGamesUrl, headers } from '../../../axios/axios';
import * as actionType from '../../../store/actions';
import { connect } from 'react-redux';
//Components:
import GameCard from '../../GameCard/GameCard';
//Styles:
import {
    StyledContainer,
    StyledListOfGames,
    StyledSeeMoreLink,
    StyledTitle,
    StyledListInfo
} from '../../StyledComponents/HomePage/StyledContainers/StyledContainers';

//Component:
class Top5PC extends Component {
    componentDidMount() {
        this.getTopPc()
    }

    getTopPc() {

        axios.get(top5PCGamesUrl, headers)
            .then((res) => {
                //console.log(res.data.data)
                this.props.topPC(res)

            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {

        let listOfGames = <h1>Loading Games...</h1>
        if (this.props.topPcState !== null) {
            listOfGames = this.props.topPcState.map(game => (
                <GameCard
                    key={game.title}
                    title={game.title}
                />
            ))

        }

        return (

            <StyledContainer>
                <StyledListInfo>
                    <StyledTitle>Top PC Games</StyledTitle>
                    <StyledSeeMoreLink to="/TopPcRanking" >See more...</StyledSeeMoreLink>
                </StyledListInfo>
                <StyledListOfGames>
                    {listOfGames}
                </StyledListOfGames>
            </StyledContainer>

        )
    }

}

//React-Redux
const mapDispatchToProps = dispatch => {
    return {
        topPC: (res) => dispatch({ type: actionType.TOP_5_PC, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        topPcState: state.top5PC
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top5PC);