import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import PlaylistList from "../components/PlaylistList";

const CurrentPlaylists = () => {
   const { state } = useLocation()

   return (
      <>
         <Helmet>
            <title>Spotify ― {state.name}</title>
         </Helmet>
         <section>
            <h2 className="text-largest mt-10 mb-24 font-bold">{state.name}</h2>
            <PlaylistList title={`Popular ${state.name} playlists`} playlists={state.playlists} />
         </section>
      </>
   );
}

export default CurrentPlaylists;