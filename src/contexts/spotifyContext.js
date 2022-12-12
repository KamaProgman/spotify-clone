import { createContext } from "react";

const spotify = createContext({
   CLIENT_ID: "0e5b5165547242fc9ee10e00a99a9ea9",
   REDIRECT_URI: "http://localhost:3000",
   AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
   RESPONSE_TYPE: "token"
})

export default spotify;