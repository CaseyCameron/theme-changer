import React from 'react';
import CharacterList from '../characters/CharacterList';
import Header from '../common/Header';
import Wrapper from '../common/Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <CharacterList />
    </Wrapper>
  );
}
