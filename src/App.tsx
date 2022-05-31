// hooks
import React, {useEffect} from 'react';

// components
import {ThemeProvider} from 'styled-components/native';
import {Routes} from '@routes/index';

// utils
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
