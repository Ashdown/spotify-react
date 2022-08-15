import {useSearchParams} from "react-router-dom";
import { CODE_KEY} from "../../constants";
import useSpotifyToken from "../../services/useSpotifyToken";

const Authorization = () => {

  const [searchParams] = useSearchParams();

  const code = searchParams.get(CODE_KEY)

  console.log('code', code)

  const spotifyToken = useSpotifyToken(code)


  return (
    <p>Authorisation</p>
  )
}

export default Authorization
