import React, { Component } from 'react';
import YouTube from 'react-youtube'; //Becacuse iFrame didn't work
//Styles:
import {
    StyledMedia,
    StyledImage,
    StyledVideos,
    StyledImages,
    StyledTitle,
    StyledVideo,
    StyledImageLink

} from '../../StyledComponents/GameDetails/GameDetailsComponents/StyledMedia';

//Component:
class MediaSection extends Component {
    render() {
        let mediaFiles = this.props.files;
        let images;
        let videos;
        //Get images:
        images = mediaFiles.map(file => {
            if (file.type === "image") { //Instead of _blank I could create a modal too.
                return (
                    <StyledImageLink target="_blank" href={file.url}> 
                        <StyledImage
                            key={file.id}
                            src={file.url}
                            onerror={{ display: "none" }} />
                    </StyledImageLink>
                )
            } else {
                return (images = null)
            }
        })

        //Video Confing:
        const opts = {
            width: '500px;',
            height: '300px'
        }
        //Get videos: 
        videos = mediaFiles.map(file => {
            if (file.type === "video") {
                let videoId = file.url.slice(32, file.url.length) //Not very professional solution
                return (
                    <StyledVideo>
                        <YouTube //This will create console warning, I didn't find a solution for it.
                            key={file.id}
                            videoId={videoId}
                            opts={opts}
                        />
                    </StyledVideo>
                )
            }
        })

        return (
            <StyledMedia>
                <StyledTitle>Images: </StyledTitle>
                <StyledImages>{images}</StyledImages>
                <StyledTitle>Videos: </StyledTitle>
                <StyledVideos>{videos}</StyledVideos>
            </StyledMedia>
        )
    }
}

export default MediaSection;