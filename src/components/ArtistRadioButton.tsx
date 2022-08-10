import React from "react";

type Props = {
  value: string;
  children: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  checked: boolean;
}


const ArtistRadioButton = ({value, children, onChange, checked}:Props) =>
  <label>
    <input type="radio" name="artists" value={value} onChange={onChange} checked={checked}/>
    {children}
  </label>

export default ArtistRadioButton
