import React from "react";
import useTracks from "./useTracks";
import Artists from "./Artists";

const Page = () => {

  const tracks = useTracks()

  return (<div>
    <h1 data-testid="page-heading">Spotify App</h1>
    <h2>Tracks</h2>
    <ul>
    {
      tracks.map( track => <li key={track.id}>
        {track.name}
        <img height="64" width="64" src={track.image}/>
      </li>)
    }
    </ul>
    <Artists tracks={tracks}/>
  </div>)
}

export default Page
