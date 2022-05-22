import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import {Routes} from '@routes/index';
import {defaultTheme} from '@themes/index';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
