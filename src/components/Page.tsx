import React from "react";
import useTracks from "../services/useTracks";

const Page = () => {

  const tracks = useTracks()

  console.log('tracks', tracks)

  return (<div>
    <h1 data-testid="page-heading">Spotify App</h1>
    <p>Insert the app here</p>
  </div>)
}

export default Page
