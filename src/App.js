import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import GameDetails from './components/GameDetails/GameDetails';
import Navbar from './components/NavBar/Navbar';
import HoursWatchedRanking from './components/HoursWatchedRanking/HoursWatchedRanking';
import TopPCRanking from './components/TopPCRanking/TopPCRanking';
import Search from './components/Search/Search';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <Route path="/" exact component={HomePage} />
        <Route path="/HoursWatchedRanking" component={HoursWatchedRanking} />
        <Route path="/TopPcRanking" component={TopPCRanking} />
        <Route path="/game/:title" exact component={GameDetails} />
      </div>

    );
  }

}

export default App;
