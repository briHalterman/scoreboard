import React, { useState } from 'react';

const AddPlayerForm = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      {console.log(value)};
      <input
        type="text"
        value={value}
        placeholder="Enter a player's name"
        onChange={(event) => setValue(event.target.value)}
      />
      <input type="submit" value="Add player" />
    </form>
  );
};

export default AddPlayerForm;
