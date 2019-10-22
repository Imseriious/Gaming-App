import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import GameDetails from './components/GameDetails/GameDetails';
import Navbar from './components/NavBar/Navbar';
import HoursWatchedRanking from './components/Rankings/HoursWatchedRanking/HoursWatchedRanking';
import TopPCRanking from './components/Rankings/TopPCRanking/TopPCRanking';
import SavedGames from './components/SavedGames/SavedGames';


class App extends Component {



  render() {
  
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/HoursWatchedRanking" component={HoursWatchedRanking} />
        <Route path="/TopPcRanking" component={TopPCRanking} />
        <Route path="/game/:title" exact component={GameDetails} />
        <Route path="/SavedGames" exact component={SavedGames} />
      </div>

    );
  }

}

export default App;


