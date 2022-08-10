import React from "react";
import useTracks from "./useTracks";

const Page = () => {

  const tracks = useTracks()

  console.log('tracks', tracks)

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
    <h2>Authors</h2>
  </div>)
}

export default Page
