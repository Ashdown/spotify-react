import React from "react";
import {createUseStyles} from "react-jss";

type Props = {
  children: string;
}

const useStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: '1em',
    textAlign: 'center',
    marginTop: 8,
    color: '#000'
  }
}));

const SubHeading = ({children}:Props) => {

  const classes = useStyles()

  return (<h2 className={classes.root}>{children}</h2>)
}

export default SubHeading
