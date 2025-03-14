import React, { createContext, useState } from 'react';

// Create a context
export const ScoreboardContext = createContext();

let id = 0;

export const Provider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const handleRemovePlayer = (id) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };

  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id,
          };
        }
        return player;
      })
    );
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: id++,
      },
    ]);
  };

  return (
    <ScoreboardContext.Provider
      value={{
        players,
        actions: {
          changeScore: handleScoreChange,
          addPlayer: handleAddPlayer,
          removePlayer: handleRemovePlayer,
        },
      }}
    >
      {children}
    </ScoreboardContext.Provider>
  );
};
