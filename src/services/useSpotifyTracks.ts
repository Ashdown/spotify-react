import {useQuery} from "react-query";
import axios from "axios";

const BEARER_TOKEN = 'BQDF4E8fAmQMb2uH-AHDVZFWgpVZBeTe1khSDIcbgBjef0Nqavu1bUf3xQPA0z8dIwO-ggqVMEWCpOPSA4VTAnPoRtAQOVdkYkuBZClsd2IZynnn7IVSp-DyrqKJUxsAH9GieDWWPjrD6aBIGd_nuk5j1IkXPTk62do-Qv_lzxTvBqabSa_YQvJj67RBCeQ9DTerXamx_yH9SqWxZvZqVO7fDUAS7nPsS6kDc_fEubN60K0Ox75vUv3mQyauwZSz8IkQxS_3Cs501oxSATSyvcXUvpqEay74EKXwcLPTeZWccQXwvyQAVY3rVoH9-Y9hYEcP'

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
