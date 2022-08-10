import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { createUseStyles} from 'react-jss';
import { QueryClientProvider } from 'react-query';
import { fontStyles, resetStyles} from "./styles";
import queryClient from './queryClient';
import Page from "./components/Page";

const useStyles = createUseStyles(() => ({
  '@global': {
    ...fontStyles,
    ...resetStyles,
  },
}));

function App() {

  useStyles();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Page/>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
