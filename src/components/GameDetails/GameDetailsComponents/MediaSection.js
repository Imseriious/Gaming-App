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
        //console.log(mediaFiles)
        //Get images:
        images = mediaFiles.map(file => {
            if (file.type === "image") {
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
                let videoId = file.url.slice(32, file.url.length) //Fastest solution, I know ...
                // console.log(videoId)
                return (
                    <StyledVideo>
                        <YouTube
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