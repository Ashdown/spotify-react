import {useQuery} from "react-query";
import axios from "axios";

const BEARER_TOKEN = 'BQBWeXbwJUZQgJB3ioZaPLrkEOFD8H1riBH_BABHbyHustke7k3Ki_wOZnFDGQRSZYa2SIS_ymOqCfsJze998E3FibDu9A0RcsQEDx2ET-Kab4KV-pwgu7vudouYx6vwhNnh4vCCSl1JvSCnyN24OekHvXZqDHS64O26_UIs0RREpGyc9czHPqE2_X_q_ajTXc3H0n-xO4g_wXKFsS4ChOFnckj2kGFbmcJ8WvksYRuLOUS3PNnymqbV8RtE8BmfSTZw7BIxC7-yPwKmiPyj6mblJd2iWDg_eeXfBilRY2R-ENH3juO6IMDHd5ksczDzepWa'

const config = {
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
};

// const options = { refetchInterval: 5000 };

const useSpotifyTracks = () => {
  return useQuery(["tracks"], async () => {
    const { data } = await axios.get(
      // get all users liked tracks
      "https://api.spotify.com/v1/me/tracks",
      config
    )
    return data;
  },
  // options
  );
}

export default useSpotifyTracks
