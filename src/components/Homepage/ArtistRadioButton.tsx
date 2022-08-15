import React from "react";
import {createUseStyles} from "react-jss";
import classNames from "classnames";
import {GUTTER_WIDTH} from "../../constants";

type Props = {
  value: string;
  children: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const useStyles = createUseStyles(() => ({
  root: {
    display: 'block',
    padding: GUTTER_WIDTH,
    border: '1px solid #e8ecf0',
    background: '#fff',
  },
  isSelected: {
    background: '#e8ecf0',
  },
  radio: {
    opacity: 0,
    position: 'fixed',
    left: -1000,
    right: -1000
  }
}))


const ArtistRadioButton = ({value, children, onChange, checked}:Props) => {

  const classes = useStyles()

  return (<label className={classNames(classes.root, { [classes.isSelected]: checked})}>
    <input className={classes.radio} type="radio" name="artists" value={value} onChange={onChange} checked={checked}/>
    {children}
  </label>)
}




export default ArtistRadioButton
