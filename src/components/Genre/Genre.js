import React, { Component } from 'react';
//Axios:
import Api, {genreUrl} from '../../axios/api';
//Styles:
import {
    StyledContainer,
    StyledGenreTitle,
    StyledGenreMedia,
    StyledGenreDescription,
    StyledGenreImage,
    StyledDescContainer

} from '../StyledComponents/Genre/Genre';

//Component: 
class Genre extends Component {

    state = {
        genreName: this.props.match.params.name,
        genre: null
    }

    componentDidMount() {
        this.getGenreData();
        if (this.state.genre !== null) {
        }
    }

    getGenreData = () => {
        Api.post(genreUrl, {})
            .then(res => {
                let genresArray = res.data;
                let genreDetails = genresArray.filter(genre => genre.name === this.state.genreName);
                this.setState({ genre: genreDetails });
            })
    }

    render() {
        let genderName;
        let genderDescription;
        let genderMedia;

        if (this.state.genre !== null) {
            genderName = this.state.genre[0].name
            genderMedia = this.state.genre[0].media_files.map(image => (
                <StyledGenreImage key={image.url} src={image.url} />
            ));
            genderDescription = this.state.genre[0].description
        }
        return (
            <StyledContainer>
                <StyledGenreTitle>{genderName}🎲</StyledGenreTitle>
                <StyledDescContainer>
                    <StyledGenreDescription>{genderDescription}</StyledGenreDescription>
                </StyledDescContainer>
                <StyledGenreMedia>{genderMedia}</StyledGenreMedia>
            </StyledContainer>
        )
    }
}

export default Genre;