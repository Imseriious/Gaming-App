import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import HomePage from './components/HomePage/HomePage';
import GameDetails from './components/GameDetails/GameDetails';
import Navbar from './components/NavBar/Navbar';
import HoursWatchedRanking from './components/Rankings/HoursWatchedRanking/HoursWatchedRanking';
import TopPCRanking from './components/Rankings/TopPCRanking/TopPCRanking';
import SavedGames from './components/SavedGames/SavedGames';
import Footer from './components/Footer/Footer';
import Genre from './components/Genre/Genre';


const GlobalStyle = createGlobalStyle` //Example GlobalStyle
  body {
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#111' : '#EEE'};
  }

`;

class App extends Component {

  state = { //No need of Redux here , could also be stored in Local Storage.
    darkMode: 'light'
  }

  toggleTheme = () => {
    if (this.state.darkMode === 'light') {
      this.setState({ darkMode: 'dark' })
    } else {
      this.setState({ darkMode: 'light' })
    }
  }

  render() {

    return (
      <ThemeProvider theme={{ mode: this.state.darkMode }}>
        <GlobalStyle />
        <div className="App">
          <Navbar toggleTheme={this.toggleTheme} />
          <Route path="/" exact component={HomePage} />
          <Route path="/HoursWatchedRanking" component={HoursWatchedRanking} />
          <Route path="/TopPcRanking" component={TopPCRanking} />
          <Route path="/game/:title" exact component={GameDetails} />
          <Route path="/SavedGames" exact component={SavedGames} />
          <Route path="/genre/:name" exact component={Genre} />
          <Footer />
        </div>
      </ThemeProvider>

    );
  }

}

export default App;


