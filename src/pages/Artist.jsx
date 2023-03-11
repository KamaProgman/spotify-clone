import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import useService from "../hooks/service.hook";

import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const ArtistPage = () => {
   const [tracks, setTracks] = useState([]);
   const { getTracks, token } = useService()
   const { state } = useLocation()

   useEffect(() => {
      getTracks(`${state.playlist.href}/top-tracks?market=uz`)
         .then(res => setTracks(res?.tracks))
   }, [token]);

   return (
      <>
         <Helmet>
            <title>Spotify - Artist</title>
         </Helmet>

         <section className="flex-1">
            <PlaylistOverview
               album={state.playlist}
               name={state.name}
               img={state.img}
               type={state.playlist.type} />
            <SongsList tracks={tracks} />
         </section>
      </>
   );
}

export default ArtistPage;