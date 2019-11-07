import React, { Component } from 'react';
//Axios
import Api, {genresUrl} from '../../../axios/api';
//Styled:
import {
    StyledContainer,
    StyledTitle,
    StyledGenresList,
    StyledGenreLink,
    StyledGenreTitle
} from '../../StyledComponents/HomePage/Genres/Genres';

//Component:
class Genres extends Component {
    state = {
        genres: null
    }

    componentDidMount() {
        this.getGenres()
    }

    getGenres() {
        Api.get(genresUrl)
            .then((res) => {
                this.setState({ genres: res.data.data })
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {
        let genres;
        if (this.state.genres !== null) {
            genres = this.state.genres.map(genre => ( //Not Clickeable yet
                <StyledGenreLink to={`/genre/${genre.genre}`}  key={genre.genre}>
                    <StyledGenreTitle>{genre.genre}</StyledGenreTitle>
                </StyledGenreLink>
            ))
        }
        return (
            <StyledContainer>
                <StyledTitle>Genres🎲</StyledTitle>
                <StyledGenresList>
                    {genres}
                </StyledGenresList>
            </StyledContainer>
        )
    }
}

export default Genres;