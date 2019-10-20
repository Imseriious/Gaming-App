import React, {Component} from 'react';
//Styles:
import {
    StyledMedia,
    StyledImage,
    StyledVideo

} from '../../../StyledComponents/GameDetails/GameDetailsComponents/StyledMedia';

//Component:
class Media extends Component {
    render(){
        let mediaFiles = this.props.files;
        let images;
        let videos;
        console.log(mediaFiles)
        //Get images:
        images = mediaFiles.map(file => {
            if(file.type === "image") {
                return (
                <StyledImage key={file.id} src={file.url} />
                )
            }
        })
        console.log(images)
        //Get videos: 
        videos = mediaFiles.map(file => {
            if(file.type === "video"){
                return(
                    <StyledVideo key={file.id}src={file.url} />
                )
            }
        })
        
        return(
            <StyledMedia>
                {images}
                {videos}
            </StyledMedia>
        )
    }
}

export default Media;