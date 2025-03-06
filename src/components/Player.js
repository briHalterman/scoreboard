import React, { memo } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const Player = ({ name, score, id, removePlayer, changeScore }) => {
  return (
    <div className="player">
      {console.log(name + ' rendered')}
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => removePlayer(id)}
        >
          ✖
        </button>
        {name}
      </span>

      <Counter score={score} id={id} changeScore={changeScore} />
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  id: PropTypes.number,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func,
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
};

export default memo(Player, playerPropsAreEqual);
