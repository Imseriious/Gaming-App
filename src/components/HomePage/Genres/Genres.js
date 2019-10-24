import React, { Component } from 'react';
//Axios-Redux
import axios from 'axios';
import { headers } from '../../../axios/axios';
//Styled:
import {
    StyledContainer,
    StyledTitle,
    StyledGenresList,
    StyledGenre,
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
        axios.get("https://api.newzoo.com/v1.0/pc_player_usage/genre/comparison_data?fields=rank,rank_change,genre,player_share,average_playtime_per_day&start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&geo_type=global&__permission_set=Genre%20Rankings", headers)
            .then((res) => {
                this.setState({ genres: res.data.data })
                console.log(res.data.data)
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {
        let genres;
        if (this.state.genres !== null) {
            genres = this.state.genres.map(genre => ( //Not Clickeable yet
                <StyledGenre  key={genre.genre}>
                    <StyledGenreTitle>{genre.genre}</StyledGenreTitle>
                </StyledGenre>
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