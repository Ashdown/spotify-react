import React from "react";
import useTracks from "./useTracks";
import Artists from "./Artists";
import {useSearchParams} from "react-router-dom";

const Page = () => {

  const [searchParams] = useSearchParams();
  const tracks = useTracks()
  const artist = searchParams.get('artist')
  const filteredTracks = artist ? tracks.filter( track => track.artist.id === searchParams.get('artist')) : tracks

  return (<div>
    <h1 data-testid="page-heading">Spotify App</h1>
    <h2>Tracks</h2>
    <ul>
    {
      filteredTracks.map( track => <li key={track.id}>
        {track.name}
        <img height="64" width="64" src={track.image}/>
      </li>)
    }
    </ul>
    <Artists tracks={tracks}/>
  </div>)
}

export default Page
