import React from "react";
import useTracks from "./useTracks";
import PageHeading from "./PageHeading";
import TrackList from './TrackList';
import Artists from "./Artists";

const Page = () => {

  const tracks = useTracks()

  return (
    <>
      <PageHeading>Spotify App</PageHeading>
      <TrackList tracks={tracks}/>
      <Artists tracks={tracks}/>
    </>
  )
}

export default Page
