import {useSearchParams, Navigate } from "react-router-dom";
import {ACCESS_TOKEN_KEY, CODE_KEY, EXPIRES_IN_KEY} from "../../constants";
import useSpotifyToken from "../../services/useSpotifyToken";
import {saveToStore} from "../../utils/localStore";

const Authorization = () => {

  const [searchParams] = useSearchParams();

  const code = searchParams.get(CODE_KEY)

  const spotifyTokenResponse = useSpotifyToken(code)

  const { isLoading, isError, data } = spotifyTokenResponse

  if(!isLoading && !isError) {
    saveToStore(ACCESS_TOKEN_KEY, data.access_token)
    saveToStore(EXPIRES_IN_KEY, new Date(new Date().getTime() + data.expires_in))
    return <Navigate to="/"/>
  }

  return (
    <p>Authorising User</p>
  )
}

export default Authorization
