import {useQuery} from "react-query";
import axios from "axios";

const BEARER_TOKEN = 'BQDek8AZ5lW1bST_pvrw35jEv3YJm2bE_OcVBfiyqcE7bgkRD0Rdxln9e2nXd3d_MglOwWSoBtgaTcJPTItHShEA9R7RV1bK2hg8B2ZdNjfldwFlqH6nxpHt5IY4aqvZDVHVNiRx1zSr0f1O5UdwJRD3ekAtoZmI07ziIevW7KdVO3aH_df5VbprHWLOBX3Hw4V500hlvteDnksLs8eJNbiO-jmiu8a8op1RDXo-KEb-0ApM0o3LES3sDPi0Yh_Yc3VauAnlWruKR36B5TA1Y5_OGK8v3zDBNZ48FfupdEeLb5fRhS6xAsDywkVb_IJ-Yo5H'

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
