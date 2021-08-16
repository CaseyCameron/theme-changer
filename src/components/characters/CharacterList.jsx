import React from 'react';
import Character from './Character';
import { useCharacters } from '../state/CharacterProvider';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id} style={{ listStyle: 'none', }}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>{characterElements}</ul>
  );
};

export default CharacterList;
