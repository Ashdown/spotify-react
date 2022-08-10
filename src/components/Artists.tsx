import React from "react";
import { Track, Artist } from "./useTracks";
import { useSearchParams } from 'react-router-dom'
import ArtistRadioButton from "./ArtistRadioButton";
import SubHeading from "./SubHeading";
import {createUseStyles} from "react-jss";
import {GUTTER_WIDTH} from "../constants";

type Props = {
  tracks: Track[];
  className: string;
}

const useStyles = createUseStyles(() => ({
  form: {
    marginTop: GUTTER_WIDTH * 2
  }
}))

const Artists = ({tracks, className}:Props) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const classes = useStyles()

  const artists:Artist[] = []

  tracks.forEach( track => {
    if(!artists.find( artist => artist.id === track.artist.id)) {
      artists.push(track.artist)
    }
  })

  const onArtistChange = (event:any) => setSearchParams({artist: event.currentTarget.value})

  const clearSelectedArtist = () => setSearchParams({})

  const selectedArtist = searchParams.get('artist')

  return (
    <div className={className}>
      <SubHeading dataTestId="artists-heading" >Artists</SubHeading>
      <form className={classes.form}>
        <ArtistRadioButton value='none' onChange={clearSelectedArtist} checked={!selectedArtist}>
          None
        </ArtistRadioButton>
        { artists.map( artist =>
          <ArtistRadioButton key={artist.id} value={artist.id} onChange={onArtistChange} checked={artist.id === selectedArtist}>
            {artist.name}
          </ArtistRadioButton>
        )}
      </form>
    </div>
  )
}

export default Artists
