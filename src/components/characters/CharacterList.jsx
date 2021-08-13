import React from 'react';
import Button from '../common/Button';
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

  return (
    <div style={{ backgroundColor: `${theme}` }}>
      <Button>←</Button>
      <Button>→</Button>
      <ul>{characterElements}</ul>
    </div>
  );
};

export default CharacterList;
