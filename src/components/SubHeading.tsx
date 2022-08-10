import React from "react";
import {createUseStyles} from "react-jss";
import {GUTTER_WIDTH} from "../constants";

type Props = {
  children: string;
  dataTestId: string;
}

const useStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: '1em',
    textAlign: 'center',
    marginTop: GUTTER_WIDTH,
    color: '#000'
  }
}));

const SubHeading = ({children, dataTestId}:Props) => {

  const classes = useStyles()

  return (<h2 data-testid={dataTestId} className={classes.root}>{children}</h2>)
}

export default SubHeading
