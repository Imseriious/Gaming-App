import React, { Component } from 'react';
//Axios:
import axios from 'axios';
import { genreUrl, headers } from '../../axios/axios';
//Styles:
import {
    StyledContainer,
    StyledGenreTitle,
    StyledGenreMedia,
    StyledGenreDescription,
    StyledGenreImage,
    StyledDescContainer


} from '../StyledComponents/Genre/Genre';
//import './Genre.scss'; Example SCSS


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
        axios.post(genreUrl, {}, headers)
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

//Example SCSS:

//<div className="Container">
{/* <h1 className="Title">{genderName}🎲</h1>
<div className="DescriptionContainer">
    <p className="Description">{genderDescription}</p>
</div>
<div className="Media">{genderMedia}</div> */}

//</div>

export default Genre;