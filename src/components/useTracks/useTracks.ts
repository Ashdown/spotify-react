import useSpotifyTracks from "../../services/useSpotifyTracks";
import getCleanTrackData from "./getCleanTrackData";

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
export const sortTrackByDate = (trackA:Track, trackB:Track) => trackA.date - trackB.date

const useTracks = ():Track[] => {
  const spotifyTracks = useSpotifyTracks()

  if(spotifyTracks.isError || spotifyTracks.isLoading) {
    return []
  }
  return getCleanTrackData(spotifyTracks.data.items).sort(sortTrackByDate)
}

export default useTracks
