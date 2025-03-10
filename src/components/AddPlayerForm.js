import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddPlayerForm = ({ addPlayer }) => {
  const playerInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlayer(playerInput.current.value);
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

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerForm;
