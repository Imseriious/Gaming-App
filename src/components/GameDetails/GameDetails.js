import React, { Component } from 'react';
import classes from './GameDetails.module.css';
import axios from 'axios';


class GameDetails extends Component {

    componentDidMount(){
        this.getGameDetails()
    }

    getGameDetails(){
        const API_URL = "https://api.newzoo.com/v1.0/metadata/game/c6b51f05-d692-40f8-86dc-1ac5851581d8?__permission_set=Explorer%20Games";
        const header = {
            headers: { "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ" }
        }
        axios.get(API_URL, header)
            .then((res) => {
                console.log(res)
                
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    render() {
        return (
            <div className={classes.GameDetails}>
                <h1>{this.props.match.params.title}</h1>
            </div>
        )
    }
}

export default GameDetails;