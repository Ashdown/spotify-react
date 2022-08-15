import React from "react";
import {createUseStyles} from "react-jss";
import {GUTTER_WIDTH} from "../../constants";

type Props = {
  children: string;
}

const useStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 24,
    lineHeight: '1em',
    textAlign: 'center',
    marginTop: GUTTER_WIDTH * 4,
    color: '#000'
  }
}));

const PageHeading = ({children}:Props) => {

  const classes = useStyles()

  return(<h1 data-testid="page-heading" className={classes.root}>{children}</h1>)
}

export default PageHeading
