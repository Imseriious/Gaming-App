import React, { Component } from 'react';
//Router:
import {Link} from 'react-router-dom';
//Components:
import SearchResult from './Results';
//Axios:
import axios from 'axios';
import { headers, getGameIDUrl } from '../../axios/axios';
//Assets:
import Searchicon from '../../assets/search.svg';
//Styles:
import {
    StyledForm,
    StyledInput,
    StyledButton,
    StyledSearchButtonIcon,
    StyledFormContainer,
    StyledResults,
    StyledContainer
} from '../StyledComponents/Search/StyledSearch';




//Component:
class Search extends Component {
    state = {
        results: null
    }

    findGames = (event) => {
        let searchText = event.target.value
        if (event.target.value) {
            let body = {
                "search_text": `${searchText}`, "fields": ["id", "name", "release_dates"]
            }
            axios.post(getGameIDUrl, body, headers)
                .then(res => res.data.filter((result) => { return result.type === "game" }))
                .then(res => this.setState({ results: res }))
                .then(console.log(this.state.results))
        } else {
            this.setState({ results: null })
        }


    }

    cleanSearch = () => {
        this.setState({ results: null })
    }

    render() {
        let showResults;


        if (this.state.results)

            if (this.state.results === null) {
                showResults = null;
            } else {
                let results = this.state.results.map(result => (
                    <Link to={`/game/${result.name}`}>
                        <SearchResult
                            name={result.name}
                        />
                    </Link>)
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
                            onChange={this.findGames}
                            cleanSearch={this.cleanSearch} />
        

                    </StyledForm>
                </StyledFormContainer>
                {showResults}

            </StyledContainer>
        )
    }
}

export default Search;