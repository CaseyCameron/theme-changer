import React from 'react';
import Character from './Character';
import { useCharacters } from '../state/CharacterProvider';
import { useSetTheme } from '../state/ThemeProvider';
import Wrapper from '../common/Wrapper';

const CharacterList = () => {
  const characters = useCharacters();
  const { theme } = useSetTheme();
  console.log(theme);

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Character {...character} />
    </li>
  ));

  return <Wrapper><ul>{characterElements}</ul></Wrapper>;
};

export default CharacterList;
