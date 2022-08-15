import React from "react";
import {createUseStyles} from "react-jss";
import {useSearchParams} from "react-router-dom";
import {Track} from "./useTracks/useTracks";
import classNames from "classnames";
import SubHeading from "./SubHeading";
import { GUTTER_WIDTH } from "../../constants";

type Props = {
  tracks: Track[]
}

const useStyles = createUseStyles(() => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: GUTTER_WIDTH * 2,
    marginRight: GUTTER_WIDTH / 2,
  },
  item: {
    flexBasis: '20%',
    padding: GUTTER_WIDTH / 2
  },
  trackInformation: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '1em',
    marginTop: GUTTER_WIDTH,
    color: '#000'
  },
  trackTitle: {
    fontWeight: 500
  },
  image: {
    marginTop: GUTTER_WIDTH,
    width: '100%',
    height: 'auto'
  }

}));

const TrackList = ({tracks}:Props) => {

  const classes = useStyles()

  const [searchParams] = useSearchParams();

  const artist = searchParams.get('artist')

  const filteredTracks = artist ? tracks.filter( track => track.artist.id === searchParams.get('artist')) : tracks

  return (
    <>
    <SubHeading dataTestId="tracks-heading">Tracks</SubHeading>
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
          <img className={classes.image} height="64" width="64" src={track.image}/>
        </li>)
      }
    </ul>
  </>
  )
}

export default TrackList
