import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Gameslist from './components/Gameslist/Gameslist';
import GameDetails from './components/GameDetails/GameDetails';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Gameslist} />
        <Route path="/:name" component={GameDetails} />
      </div>

    );
  }

}

export default App;
