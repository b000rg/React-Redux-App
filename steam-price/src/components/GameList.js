import React from "react";
import { connect } from "react-redux";
import Game from './Game';

const GameList = ({ list }) => {
  return (
    <div>
      {list.map((game) => (
        <Game game={game} key={game.dealID} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(GameList);
