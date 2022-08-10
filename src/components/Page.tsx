import React from "react";
import useTracks from "./useTracks";
import { Artist} from "./useTracks";

const Page = () => {

  const tracks = useTracks()

  console.log('tracks', tracks)

  const artists:Artist[] = []

  tracks.forEach( track => {
    if(!artists.find( artist => artist.id === track.artist.id)) {
      artists.push(track.artist)
    }
  })

  console.log('artists', artists)

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
    <form>
      { artists.map( artist =>
      <label key={artist.id}>
        <input type="radio" name="authors" value={artist.id}/>
        {artist.name}
      </label>
      )}
    </form>
  </div>)
}

export default Page
