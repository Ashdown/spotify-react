import React from "react";
import useTracks from "./useTracks";
import PageHeading from "./PageHeading";
import TrackList from './TrackList';
import Artists from "./Artists";
import {createUseStyles} from "react-jss";

const SIDEBAR_WIDTH = 400
const GUTTER_WIDTH = 16

const useStyles = createUseStyles(() => ({
  content: {
    position: 'relative',
    paddingRight: SIDEBAR_WIDTH + GUTTER_WIDTH,
    paddingBottom: GUTTER_WIDTH,
    paddingLeft: GUTTER_WIDTH,
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    position: 'absolute',
    top: 0,
    right: GUTTER_WIDTH,
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
