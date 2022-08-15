import {useQuery} from "react-query";
import axios from "axios";

const options = { refetchInterval: 30000 };

const useSpotifyTracks = () => {

  const auth = {
    accessToken: 'set this'
  }

  return useQuery(["tracks"], async () => {
    const { data } = await axios.get(
      // get all users liked tracks
      "https://api.spotify.com/v1/me/tracks",
      {
        headers: { Authorization: `Bearer ${auth.accessToken}` }
      }
    )
    return data;
  },
  options
  );
}

export default useSpotifyTracks
