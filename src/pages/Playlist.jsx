import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const Playlist = () => {
   const { state } = useLocation()
   const url = state.tracks.href

   return (
      <>
         <Helmet>
            <title>Spotify - Playlist</title>
         </Helmet>
         <section className="flex-1">
            <PlaylistOverview playlist={state} />
            <SongsList url={url} />
         </section>
      </>
   );
}

export default Playlist;