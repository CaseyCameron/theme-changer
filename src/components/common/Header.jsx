import React from 'react';
import { useSetTheme } from '../state/ThemeProvider';
import Wrapper from './Wrapper';

const Header = () => {
  const { handleTheme } = useSetTheme();

  const headerStyle = {
    border: '1px solid black',
  };

  return (
    <Wrapper>
      <header style={headerStyle}>
        <h1>Home Page</h1>
        <div>
          <label>
            <input name="theme" type="radio" value="white" defaultChecked onChange={handleTheme} />
            Light Theme
          </label>
          <label>
            <input name="theme" type="radio" value="gray" onChange={handleTheme} />
            Dark Theme
          </label>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
