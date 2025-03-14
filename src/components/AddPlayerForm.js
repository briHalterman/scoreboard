import React, { useRef, useContext } from 'react';
import { ScoreboardContext } from './Context';

const AddPlayerForm = () => {
  const playerInput = useRef();
  const { actions } = useContext(ScoreboardContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.addPlayer(playerInput.current.value);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      {console.log(playerInput)}
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />
      <input type="submit" value="Add player" />
    </form>
  );
};

export default AddPlayerForm;
