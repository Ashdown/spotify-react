import React, { createContext, useEffect } from "react";
import {useSearchParams } from "react-router-dom";
import {loadFromStore} from "./utils/localStore";
import { ACCESS_TOKEN_KEY, CODE_KEY, REDIRECT_URL, CLIENT_ID } from "./constants";

type Props = {
  children: React.ReactNode
}

type AuthContextType = {
  accessToken: string | null,
  expiresIn: Date | null
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  expiresIn: null
})
AuthContext.displayName = 'AuthContext'

const getAccessTokenFromStorage = () =>
  loadFromStore(ACCESS_TOKEN_KEY) || null


const AuthProvider = ({children}:Props) => {

  const [searchParams] = useSearchParams();

  const accessToken = getAccessTokenFromStorage()

  const code = searchParams.get(CODE_KEY)
  // searchParams.delete(CODE_KEY)
  // setSearchParams(searchParams)

  // const accessToken = hashedParams.get(ACCESS_TOKEN_KEY)
  // const expiresIn = hashedParams.get(EXPIRES_IN_KEY)

  useEffect(() => {
    if(!accessToken && !code) {
      window.location.replace(`https://accounts.spotify.com/authorize?response_type=code&redirect_uri=${REDIRECT_URL}&scope=user-read-private user-read-email&client_id=${CLIENT_ID}`)
    }
  }, [accessToken, code])

  // console.log('code', code)

  // const spotifyToken = useSpotifyToken(REDIRECT_URL, CLIENT_ID, CLIENT_SECRET, code)

  // console.log('spotifyToken', spotifyToken)

  // const accessToken = null
  const expiresIn = null

  return (<AuthContext.Provider
    value={{
      accessToken: accessToken || null,
      expiresIn: expiresIn ? new Date(expiresIn) : null,
    }}
  >
    { children }
  </AuthContext.Provider>)
}

export default AuthProvider
