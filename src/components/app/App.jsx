import React from 'react';
import CharacterList from '../characters/CharacterList';
import Paging from '../common/Paging';
import Header from '../common/Header';
import { useSetTheme } from '../state/ThemeProvider';
import Wrapper from '../common/Wrapper';

export default function App() {
  const { theme } = useSetTheme();
  
  return (
    <Wrapper>
      <div style={{ backgroundColor: `${theme}` }}>
        <Header />
        <Paging />
        <CharacterList />
      </div>
    </Wrapper>
  );
}
