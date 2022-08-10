import React from "react";
import {createUseStyles} from "react-jss";
import {useSearchParams} from "react-router-dom";
import {Track} from "./useTracks";
import classNames from "classnames";

type Props = {
  tracks: Track[]
}

const useStyles = createUseStyles(() => ({
  heading: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: '1em',
    textAlign: 'center',
    marginTop: 8,
    color: '#000'
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    flexBasis: '25%'
  },
  trackInformation: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: '1em',
    marginTop: 2,
    color: '#000'
  },
  trackTitle: {
    fontWeight: 500
  }

}));

const TrackList = ({tracks}:Props) => {

  const classes = useStyles()

  const [searchParams] = useSearchParams();

  const artist = searchParams.get('artist')

  const filteredTracks = artist ? tracks.filter( track => track.artist.id === searchParams.get('artist')) : tracks


  return (
    <>
    <h2 className={classes.heading}>Tracks</h2>
    <ul className={classes.list}>
      {
        filteredTracks.map( track => <li key={track.id} className={classes.item}>
          <h3 className={classNames(classes.trackInformation, classes.trackTitle)}>
            {track.name}
          </h3>
          <ul>
          <li className={classes.trackInformation}>
            By {track.artist.name}
          </li>
          <li className={classes.trackInformation}>
            Liked on {track.date.toLocaleString()}
          </li>
          </ul>
          <img height="64" width="64" src={track.image}/>
        </li>)
      }
    </ul>
  </>
  )
}

export default TrackList
