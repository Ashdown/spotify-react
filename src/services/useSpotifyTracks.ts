import {useQuery} from "react-query";
import axios from "axios";

const BEARER_TOKEN = 'update me'

const config = {
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
};

const options = { refetchInterval: 30000 };

const useSpotifyTracks = () => {
  return useQuery(["tracks"], async () => {
    const { data } = await axios.get(
      // get all users liked tracks
      "https://api.spotify.com/v1/me/tracks",
      config
    )
    return data;
  },
  options
  );
}

export default useSpotifyTracks
