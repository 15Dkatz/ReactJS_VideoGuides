import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import EvensOrOdds from './projects/evens-or-odds';
import Reaction from './projects/reaction';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={() => <Header><App /></Header>} />
      <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
      <Route path='/music-master' render={() => <Header><MusicMaster /></Header>} />
      <Route path='/evens-or-odds' render={() => <Header><EvensOrOdds /></Header>} />
      <Route path='/reaction' render={() => <Header><Reaction /></Header>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
