import React, { Component } from 'react';
//Components:
import SearchResult from './Results';
//Axios:
import Api, { getGameIDUrl } from '../../axios/api';
//Styles:
import {
    StyledForm,
    StyledInput,
    StyledFormContainer,
    StyledResults,
    StyledContainer,
    StyledLink
} from '../StyledComponents/Search/StyledSearch';
//Component:
class Search extends Component {
    state = {
        results: null
    }
    
    findGames = (event) => { //Cancel request when empty event.target.value missing
        let searchText = event.target.value;
        if (event.target.value !== "") {
            let body = {
                "search_text": `${searchText}`, "fields": ["id", "name", "release_dates"]
            }
            Api.post(getGameIDUrl, body)
                .then(res => res.data.filter((result) => { return result.type === "game" }))
                .then(res => this.setState({ results: res }))
                .catch(err => {
                    console.log(err)
                })
        } else {
            this.setState({results: null})
        }

    }
    render() {
        let showResults;

        if (this.state.results === null) {
            showResults = null;
        } else {
            let results = this.state.results.map(result => (
                <StyledLink key={result.name} to={`/game/${result.name}`}>
                    <SearchResult
                        name={result.name}
                    />
                </StyledLink>)
            )
            showResults = <StyledResults>{results}</StyledResults>
        }
        return (
            <StyledContainer>
                <StyledFormContainer>
                    <StyledForm>
                        <StyledInput
                            type="text"
                            placeholder="Search Game..."
                            onChange={this.findGames} />
                    </StyledForm>
                </StyledFormContainer>
                {showResults}
            </StyledContainer>
        )
    }
}
export default Search;