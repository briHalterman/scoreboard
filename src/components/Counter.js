import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScoreboardContext } from './Context';

const Counter = ({ index }) => {
  const { players, actions } = useContext(ScoreboardContext);

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => actions.changeScore(players[index].id, -1)}
      >
        {' '}
        -{' '}
      </button>
      <span className="counter-score">{players[index].score}</span>
      <button
        className="counter-action increment"
        onClick={() => actions.changeScore(players[index].id, 1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Counter;
