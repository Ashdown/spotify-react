import React from "react";
import {createUseStyles} from "react-jss";

type Props = {
  children: string;
}

const useStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 24,
    lineHeight: '1em',
    textAlign: 'center',
    marginTop: 32,
    color: '#000'
  }
}));

const PageHeading = ({children}:Props) => {

  const classes = useStyles()

  return(<h1 data-testid="page-heading" className={classes.root}>{children}</h1>)
}

export default PageHeading
