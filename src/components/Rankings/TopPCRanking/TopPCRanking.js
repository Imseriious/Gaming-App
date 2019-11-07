import React, { Component } from 'react';
//Axios-Redux
import Api, {topPCRankingUrl} from '../../../axios/api';
import { connect } from 'react-redux';
import * as actionType from '../../../store/actions';
//Components:
import GameCard from '../../GameCard/GameCard';
//Styles:
import { 
    StyledContainer, 
    StyledListOfGames,
    StyledTitle,
} from '../../StyledComponents/Rankings/styledRankings';

//Component:
class TopPCRanking extends Component {
    componentDidMount() {
        this.getTopPcRanking()
    }

    getTopPcRanking() {
        Api.get(topPCRankingUrl)
            .then((res) => {
                this.props.topPCRanking(res)
                
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {

        let listOfGames = <h1>Loading Games...</h1>
        if (this.props.topPCRankingState !== null) {
            listOfGames = this.props.topPCRankingState.map(game => (
                <GameCard
                    key={game.title}
                    title={game.title}
                    genre={game.genre}
                    rank={game.rank}
                />
            ))

        }

        return (
            <>
            <StyledTitle>Top PC Games🖱️</StyledTitle>
            <StyledContainer>
                <StyledListOfGames>
                    {listOfGames}
                </StyledListOfGames>
            </StyledContainer>
            </>
        )
    }

}

//React-Redux
const mapDispatchToProps = dispatch => {
    return {
        topPCRanking: (res) => dispatch({ type: actionType.TOP_PC_RANKING, payload: res })
    }
}

const mapStateToProps = state => {
    return {
        topPCRankingState: state.topPCRanking
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPCRanking);