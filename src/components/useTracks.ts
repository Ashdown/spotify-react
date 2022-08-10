import useSpotifyTracks from "../services/useSpotifyTracks";

export type Artist = {
  id: string;
  name: string;
}

export type Track = {
  id: string;
  name: string;
  image: string;
  date: Date;
  artist: Artist;
}

// @ts-ignore
const sortTrackByDate = (trackA:Track, trackB:Track) => trackA.date - trackB.date

const useTracks = ():Track[] => {
  const spotifyTracks = useSpotifyTracks()

  if(spotifyTracks.isError || spotifyTracks.isLoading) {
    return []
  }

  return spotifyTracks.data.items.map( (item:any) => ({
    id: item.track.id,
    name: item.track.name,
    image: item.track.album.images.find( (image:any) => image.height === 300).url,
    date: new Date(item.added_at),
    artist: {
      id: item.track.artists[0].id,
      name: item.track.artists[0].name,
    }
  })).sort(sortTrackByDate)

}

export default useTracks
