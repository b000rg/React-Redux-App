import React from "react";
import { connect } from "react-redux";
import { GameContainer } from "../assets/style";

const Game = ({ game }) => {
  return (
    <GameContainer>
      <img src={game.thumb} />
      <span>{game.title}</span>
      <span>
        <div style={{ textDecoration: "line-through" }}>{game.normalPrice}</div>
        <div>{game.salePrice}</div>
      </span>
      <span>{Math.floor(parseInt(game.savings) + 0.5)}% off!</span>
    </GameContainer>
  );
};

const mapStateToProps = (state, props) => props;

export default connect(mapStateToProps)(Game);
