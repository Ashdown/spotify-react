import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import {QueryClientProvider} from 'react-query';
import {fontStyles, resetStyles} from "./styles";
import AuthProvider from "./AuthProvider";
import queryClient from './queryClient';
import AppRoutes from "./AppRoutes";

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
        <AuthProvider>
          <AppRoutes/>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
