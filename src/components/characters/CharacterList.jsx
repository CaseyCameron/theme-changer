import React from 'react';
import Character from './Character';
import { useCharacters } from '../state/CharacterProvider';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
