import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchRickAndMorty } from '../../services/rickAndMortyApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRickAndMorty(page).then(res => setCharacters(res));
  }, [page]);

  return (
    <CharacterContext.Provider value={{ characters, page, setPage }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const usePage = () => {
  const { page, setPage } = useContext(CharacterContext);
  return { page, setPage };
};
