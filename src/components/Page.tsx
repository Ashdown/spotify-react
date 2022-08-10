import React from "react";
import useTracks from "./useTracks/useTracks";
import PageHeading from "./PageHeading";
import TrackList from './TrackList';
import Artists from "./Artists";
import {createUseStyles} from "react-jss";
import { GUTTER_WIDTH, SIDEBAR_WIDTH} from "../constants";

const useStyles = createUseStyles(() => ({
  content: {
    position: 'relative',
    paddingRight: SIDEBAR_WIDTH + (GUTTER_WIDTH * 2),
    paddingBottom: GUTTER_WIDTH * 2,
    paddingLeft: GUTTER_WIDTH * 2,
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    position: 'absolute',
    top: 0,
    right: GUTTER_WIDTH * 2,
    bottom: 0
  }
}))

const Page = () => {

  const tracks = useTracks()
  const classes = useStyles()

  return (
    <>
      <PageHeading>Spotify App</PageHeading>
      <div className={classes.content}>
        <TrackList tracks={tracks}/>
        <Artists tracks={tracks} className={classes.sidebar}/>
      </div>
    </>
  )
}

export default Page
