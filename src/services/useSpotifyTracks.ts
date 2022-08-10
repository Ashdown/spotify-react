import {useQuery} from "react-query";
import axios from "axios";

const BEARER_TOKEN = 'BQC3Knp6gEMAQklfTxKcBFMTSNcw-WNL8yCyltpCvMwAfyKrJ6OMZTq3oPOaxBGYTqvCxvrwE7aRAN54VbBrglzTjzl2KFvpKXsg5iu25vCeNB3DvEONg7yspS_ween4-DPOx14isSsyssQWDr_nhvI6tKK4x0FOh699bP2cbS-QFq3sxOJYf2t7Dhgnbb2mu-bM7db5Q0sJQviCgynj2DhnvKARKUXQlmAJdREoag1H2tYEkQtAjqpfeYa1I0eZaHHDUc3mbWojlWaVqGPvJe_D8P4hxzY15T-liObfhIzIaASDr2gjWj1WhtUPop4iMhgy'

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
