import useSpotifyTracks from "../services/useSpotifyTracks";

export type Artist = {
  id: string;
  name: string;
}

export type Track = {
  id: string;
  name: string;
  image: string;
  artist: Artist;
}

const useTracks = ():Track[] => {
  const spotifyTracks = useSpotifyTracks()

  if(spotifyTracks.isError || spotifyTracks.isLoading) {
    return []
  }
  return spotifyTracks.data.items.map( (item:any) => ({
    id: item.track.id,
    name: item.track.name,
    image: item.track.album.images.find( (image:any) => image.height === 64).url,
    artist: {
      id: item.track.artists[0].id,
      name: item.track.artists[0].name
    }
  }))

}

export default useTracks
