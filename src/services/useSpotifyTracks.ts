import { useContext } from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {AuthContext} from "../AuthProvider";

const options = { refetchInterval: 30000 };

const useSpotifyTracks = () => {

  const authContext = useContext(AuthContext)

  console.log('useSpotifyTracks', authContext.accessToken)

  const accessToken = authContext.accessToken

  return useQuery(["tracks"], async () => {
    const { data } = await axios.get(
      // get all users liked tracks
      "https://api.spotify.com/v1/me/tracks",
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
    return data;
  },
  options
  );
}

export default useSpotifyTracks
