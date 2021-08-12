import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchRickAndMorty } from '../../services/rickAndMortyApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchRickAndMorty().then(setCharacters);
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );

};
