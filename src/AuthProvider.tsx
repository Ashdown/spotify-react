import React, { createContext, useEffect } from "react";
import {useSearchParams } from "react-router-dom";
import {loadFromStore} from "./utils/localStore";
import {ACCESS_TOKEN_KEY, CODE_KEY, REDIRECT_URL, CLIENT_ID, EXPIRES_IN_KEY} from "./constants";

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

  const accessToken = loadFromStore(ACCESS_TOKEN_KEY) || null
  const expiresIn = loadFromStore(EXPIRES_IN_KEY) || null

  const code = searchParams.get(CODE_KEY)

  useEffect(() => {
    const tokenIsInvalid = !accessToken || new Date(expiresIn) <= new Date()
    if(tokenIsInvalid && !code) {
      window.location.replace(`https://accounts.spotify.com/authorize?response_type=code&redirect_uri=${REDIRECT_URL}&scope=playlist-read-private user-library-read user-read-private user-read-email&client_id=${CLIENT_ID}`)
    }
  }, [accessToken, expiresIn, code])

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
