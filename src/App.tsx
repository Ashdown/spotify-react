import React from 'react';
import { createUseStyles} from 'react-jss';
import { fontStyles, resetStyles} from "./styles";
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
      <Page/>
  );
}

export default App;
