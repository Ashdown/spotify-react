import React from 'react';
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
    <QueryClientProvider client={queryClient}>
      <Page/>
    </QueryClientProvider>
  );
}

export default App;
