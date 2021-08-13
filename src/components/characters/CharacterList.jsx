import React from 'react';
import Character from './Character';
import { useCharacters } from '../state/CharacterProvider';
import { useSetTheme } from '../state/ThemeProvider';

const CharacterList = () => {
  const characters = useCharacters();
  const { theme } = useSetTheme();

  const characterElements = characters.map(character => (
    <li key={character.name} style={{ listStyle: 'none', }}>
      <Character {...character} />
    </li>
  ));

  return <div style={{ backgroundColor: `${theme}` }}><ul>{characterElements}</ul></div>;
};

export default CharacterList;
