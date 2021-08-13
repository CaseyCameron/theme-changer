import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchRickAndMorty } from '../../services/rickAndMortyApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchRickAndMorty().then(res => setCharacters(res));
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};
