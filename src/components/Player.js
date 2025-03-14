import React, { memo, useContext } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { ScoreboardContext } from './Context';

const Player = ({ index }) => {
  const { players, actions } = useContext(ScoreboardContext);

  const highScore = Math.max(
    ...players.map((player) => player.score),
    0
  );
  const isHighScore =
    players[index].score === highScore && highScore !== 0;

  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => actions.removePlayer(players[index].id)}
        >
          ✖
        </button>
        <Icon isHighScore={isHighScore} />
        {players[index].name}
      </span>

      <Counter index={index} />
    </div>
  );
};

Player.propTypes = {
  index: PropTypes.number.isRequired,
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return (
    prevProps.score === nextProps.score &&
    prevProps.isHighScore === nextProps.isHighScore
  );
};

export default memo(Player, playerPropsAreEqual);
