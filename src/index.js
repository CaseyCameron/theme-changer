import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { CharacterProvider } from '../src/components/state/CharacterProvider';
import { ThemeProvider } from '../src/components/state/ThemeProvider';

render(
  <CharacterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CharacterProvider>,
  document.getElementById('root')
);
