import useSpotifyTracks from "../services/useSpotifyTracks";

type Track = {
  id: string;
  name: string;
  image: string;
}

type Tracks = Track[]

const useTracks = ():Tracks => {
  const spotifyTracks = useSpotifyTracks()

  if(spotifyTracks.isError || spotifyTracks.isLoading) {
    return []
  }
  return spotifyTracks.data.items.map( (item:any) => ({
    id: item.track.id,
    name: item.track.name,
    image: item.track.album.images.find( (image:any) => image.height === 64).url,
  }))

}

export default useTracks
