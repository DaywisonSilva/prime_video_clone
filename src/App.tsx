import React, {useEffect} from 'react';

import {ThemeProvider} from 'styled-components/native';

import {Routes} from '@routes/index';
import {defaultTheme, COLORS} from '@themes/index';
import {StatusBar} from 'react-native';

function App() {
  useEffect(() => {
    StatusBar.setBackgroundColor(COLORS.darkBluePrimary);
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
