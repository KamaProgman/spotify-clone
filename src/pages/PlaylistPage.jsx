import axios from "axios";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const PlaylistPage = () => {
   const [tracks, setTracks] = useState([])
   const [token, setToken] = useState('')
   const { state } = useLocation()
   const url = state.tracks.href

   useEffect(() => {
      setToken(localStorage.getItem('token'))

      if (token) {
         axios
            .get(url, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            .then(res => setTracks(res.data.items))
      }
   }, [token]);

   return (
      <section className="flex-1">
         <PlaylistOverview name={state.name} />
         <SongsList data={tracks} />
      </section>
   );
}

export default PlaylistPage;