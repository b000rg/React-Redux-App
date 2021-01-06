import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import GameList from './components/GameList';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/game-list">
          <GameList />
      </Route>
    </Switch>
  );
};

export default App;
